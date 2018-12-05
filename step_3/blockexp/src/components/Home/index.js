import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3';

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
            }
        );

    }

    render() {
        return (
            <div className="Home">
                <h2>Home page</h2>
                Current Block: {this.state.curr_block}
            </div>
        );
    }
}

export default Home;
