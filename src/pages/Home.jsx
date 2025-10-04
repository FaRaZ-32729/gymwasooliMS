import React from 'react'
import Hero from '../components/Hero'
import ChooseProgram from '../components/ChooseProgram'
import Member from '../components/Member'
import Classes from '../components/Services'
import Footer from '../components/Footer'
import Accessibility from '../components/Accessibility'
import Reviews from '../components/Reviews'
import Pakage from '../components/Pakage'

const Home = () => {
    return (
        <>
            <Hero />
            <ChooseProgram />
            <Accessibility />
            <Classes />
            <Member />
            <Reviews />
            <Pakage/>
        </>
    )
}

export default Home