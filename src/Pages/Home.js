import React from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Footer from '../components/Footer'
import '../App.css'
const Home = () => {
    return (
        <div className="App">
            <Header />
            <Display />
            <Footer />
        </div>
    )
}

export default Home