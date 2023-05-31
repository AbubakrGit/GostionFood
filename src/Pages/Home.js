import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'

export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}
