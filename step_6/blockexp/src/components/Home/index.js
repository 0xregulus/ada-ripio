import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3';
import _ from 'lodash';
import { Link } from 'react-router-dom'

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/57d8dd1c05954964b5b4cb8a2403ba09'));

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            block_ids: [],
            block_hashes: [],
            curr_block: null
        }
    }

    componentWillMount() {
        var that = this;
        web3.eth.getBlockNumber().then(
            function(result, error) {
                console.log(result);
                that.setState({
                    curr_block: result
                });
                that.getBlocks(result);
            }
        );
    }

    getBlocks(curr_block_no) {
        var that = this;
        const block_ids = this.state.block_ids.slice();
        const block_hashes = this.state.block_hashes.slice();
        var max_blocks = 10;
        if (curr_block_no < max_blocks) max_blocks = curr_block_no;
        for (var i = 0; i < max_blocks; i++, curr_block_no--) {
            web3.eth.getBlock(curr_block_no).then(
                function(result, error) {
                    console.log(result);
                    block_ids.push(result.number);
                    block_hashes.push(result.hash);
                    that.setState({
                        block_ids: block_ids,
                        block_hashes: block_hashes
                    })
                }
            );
        }

    }

    render() {
        var tableRows = [];
        _.each(this.state.block_ids, (value, index) => {
            tableRows.push(
                <tr key={this.state.block_hashes[index]}>
                    <td className="tdCenter tdStyle">{this.state.block_ids[index]}</td>
                    <td className="left-align tdStyle"><Link to={`/block/${this.state.block_hashes[index]}`}>{this.state.block_hashes[index]}</Link></td>
                </tr>
            )
        });
        return (
            <div className="Home">
                <div className="currentBlock inline-block p3 m3"><strong>Current Block:</strong> {this.state.curr_block}</div>
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th className="py2">Block No</th>
                            <th className="py2">Hash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;
