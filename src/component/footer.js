import React, { Component } from 'react'
import { LiaFacebookF } from "react-icons/lia"
import { BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi"

export default class Footer extends Component {
    render() {
        return (
            <footer className='grid grid-cols-4'>
                <div className='place-self-center flex flex-col items-center gap-9'>
                    <img src='./img/plants-store-logo-green.svg' className='w-20' />
                    <h1 className='text-2xl font-bold text-gray-600'>Simply Natural</h1>
                    <div className='flex gap-5'>
                        <LiaFacebookF className='bg-gray-600 h-8 w-8 py-1 text-white' />
                        <BiLogoTwitter className='bg-gray-600 h-8 w-8 py-1 text-white' />
                        <BiLogoInstagram className='bg-gray-600 h-8 w-8 py-1 text-white' />
                        <BiLogoLinkedin className='bg-gray-600 h-8 w-8 py-1 text-white' />
                    </div>
                </div>
                <div className='place-self-center flex flex-col gap-6'>
                    <h4 className='font-medium'>Quick Links</h4>
                    <ul>
                        <li>Introduction</li>
                        <li>know more About Us</li>
                        <li>Visit Store</li>
                        <li>Let’s Connect</li>
                    </ul>
                </div>
                <div className='place-self-center flex flex-col gap-6'>
                    <h4 className='font-medium'>Important Links</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Shipping Details</li>
                        <li>Terms & Conditions</li>
                        <li>Media Kit</li>
                    </ul>
                </div>
                <div className='place-self-center text-2xl flex flex-col gap-6'>
                    <h4 className='font-medium'>Get In Touch With Us For The Best Quality Plants & Succulents</h4>
                    <p className='text-base w-[23vw]'>Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                </div>
            </footer>
        )
    }
}
