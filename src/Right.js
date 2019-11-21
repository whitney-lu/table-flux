import React, { Component } from 'react'
import './App'
import store from "./flux/store";
import action from './flux/action';

export default class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: store.getList()
        }
        this.getList = this.getList.bind(this)
    }
    componentDidMount() {
        store.addListen(this.getList)
    }
    getList() {
        const list = store.getList();
        console.log(list)
        this.setState({
            list
        })
    }
    del(i){
        action.delOne(i)
    }
    render() {
        return (
            <div className="rightBox">
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item.name}说：{item.content}
                            <p onClick={this.del.bind(this,index)}>删除</p></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
