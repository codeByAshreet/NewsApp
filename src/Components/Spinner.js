import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={Loading} alt="" />
      </div>
    )
  }
}
