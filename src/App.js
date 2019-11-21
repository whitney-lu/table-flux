import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <p>写出对react的评价</p>
        <Left />
        <Right />
      </div>
    )
  }
}
