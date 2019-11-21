import React, { Component } from 'react'
import './App'
import store from './flux/store'

export default class Left extends Component {
    add(){
        let name = this.refs.name.value.trim()
        let content =this.refs.content.value.trim()
        store.addList({
            name,
            content
        })
    }
    render() {
        return (
            <div className="leftBox">
                <input type="text" ref='name'/>
                <br/>
                <input type="text" ref='content'/>
                <br/>
                <button onClick={this.add.bind(this)}>提交</button>
            </div>
        )
    }
}
