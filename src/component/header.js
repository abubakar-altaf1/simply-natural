import React, { Component } from 'react'
import Navbar from './navbar'


export default class Header extends Component {
    render() {
        return (
            <header className='px-8 flex flex-col gap-12 text-xl'>
                <Navbar/>
                <div className='main flex flex-col items-start gap-9'>
                    <h6>Best Quality Plants</h6>
                    <h1 className='text-6xl font-medium leading-tight text-gray-800'>Amazing Variety Of Plants Starting Just $6</h1>
                    <button className='bg-bg-color text-white text-[1rem] px-7 py-2 rounded-full'>Shop Now</button>
                </div>
            </header>
        )
    }
}
