import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='flex items-center justify-between pt-4'>
        <div className='flex items-center gap-5'>
          <img src='./img/plants-store-logo-green.svg' className='w-12' />
          <h1 className='text-2xl'>Simply Natural</h1>
        </div>
        <div className='flex gap-6'>
          <ul className='flex gap-9'>
            <li className='text-font-color'>Home</li>
            <li>Store </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>My Account</li>
          </ul>
          <ul className='flex gap-6'>
            <li className='text-font-color'>$0.00</li>
            <li className='text-font-color'><i class="fa-solid fa-bag-shopping"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
          </ul>
        </div>
      </nav>
    )
  }
}
