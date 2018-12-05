import React, { Component } from 'react';
import './style.css';
import Home from './../Home';
import Web3 from 'web3';
import { Route, Link } from 'react-router-dom'

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/57d8dd1c05954964b5b4cb8a2403ba09'));

class Block extends Component {

    constructor(props) {
        super(props);
        this.state = {
            block: []
        }
    }

    componentWillMount() {
        var block_hash = this.props.match.params.blockHash;
        this.getBlockState(block_hash);
    }

    getBlockState(block_hash) {
        var that = this;
        var currBlockObj = web3.eth.getBlock(block_hash).then(
            function(result, error) {
                that.setState({
                    block_id: result.number,
                    block_hash: result.hash,
                    block_ts: Date(parseInt(that.state.block.timestamp, 10)).toString(),
                    block_txs: parseInt(result.transactions.slice().length, 10),
                    block: result
                })
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        var block_hash_old = this.props.match.params.blockHash;
        var block_hash_new = nextProps.match.params.blockHash;
        if (block_hash_old !== block_hash_new)
            this.getBlockState(block_hash_new);
    }

    render() {
        const block = this.state.block;
        const difficulty = parseInt(block.difficulty, 10);
        const difficultyTotal = parseInt(block.totalDifficulty, 10);
        return (
            <div className="Block">
                <div>
                    <div className="mx-auto buttonBack">
                        <Link to="/"><i class="fas fa-chevron-left"></i> Volver</Link>
                        <Route exact path="/" component={Home}/>
                    </div>
                    <h2 className="inline-block">Block Info</h2>
                    <table className="mx-auto">
                        <tbody>
                            <tr><td className="tdLabel left-align p1"><strong>Height: </strong></td><td className="left-align p1">{this.state.block.number}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Timestamp: </strong></td><td className="left-align p1">{this.state.block_ts}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Transactions: </strong></td><td className="left-align p1">{this.state.block_txs}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Hash: </strong></td><td className="left-align p1">{this.state.block.hash}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Parent hash: </strong></td>
                            <td><Link to={`../block/${this.state.block.parentHash}`}>{this.state.block.parentHash}</Link></td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Nonce: </strong></td><td className="left-align p1">{this.state.block.nonce}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Size: </strong></td><td className="left-align p1">{this.state.block.size} bytes</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Difficulty: </strong></td><td className="left-align p1">{difficulty}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Difficulty: </strong></td><td className="left-align p1">{difficultyTotal}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Gas Limit: </strong></td><td className="left-align p1">{block.gasLimit}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Gas Used: </strong></td><td className="left-align p1">{block.gasUsed}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Sha3Uncles: </strong></td><td className="left-align p1">{block.sha3Uncles}</td></tr>
                            <tr><td className="tdLabel left-align p1"><strong>Extra data: </strong></td><td className="left-align p1">{this.state.block.extraData}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Block;
