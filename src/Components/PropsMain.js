import React, { Component } from 'react'

export default class PropsMain extends Component {

    constructor(props){
        super(props);


    }

  render() {
    return (
      <>
      <div className='card'>
        <img src={this.props.img}></img>

        <div className='card-body'>

          <div className='main__slider'>

            <div className='left'>
              <h5>{this.props.name}</h5>
              <h6>{this.props.weight}</h6>
              <p>{this.props.cost}</p>
            </div>

            <div className='right'>
              <button><a href='#'>+</a></button>
            </div>

          </div>

        </div>

      </div>
      
      </>
    )
  }
}
