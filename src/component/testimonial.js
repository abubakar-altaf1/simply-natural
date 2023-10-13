import React, { Component } from 'react'

export default class Testimonial extends Component {
    render() {
        return (
            <section className='flex gap-[5rem] px-8 py-12 h-[100vh]'>
                <div className='flex flex-col gap-[4.5rem]'>
                    <div className='flex flex-col gap-7'>
                        <h1 className='text-4xl font-semibold'>Testimonials</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex gap-5'>
                        <img src='./img/user1.jpg' className='h-[40vh] rounded-t-xl rounded-br-xl' />
                        <div className='self-center grid gap-8 w-60'>
                            <p className='font-light '>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <div className=''>
                                <h3 className='font-medium'>Sarah Jones</h3>
                                <p className='font-light'>Interior Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                <div className='flex gap-5'>
                        <img src='./img/testimonial-2.jpg' className='h-[40vh] rounded-t-xl rounded-br-xl' />
                        <div className='self-center grid gap-8 w-60'>
                            <p className='font-light '>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <div className=''>
                                <h3 className='font-medium'>Sarah Jones</h3>
                                <p className='font-light'>Interior Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <img src='./img/user3.jpg' className='h-[40vh] rounded-t-xl rounded-br-xl' />
                        <div className='self-center grid gap-8 w-60'>
                            <p className='font-light '>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <div className=''>
                                <h3 className='font-medium'>Sarah Jones</h3>
                                <p className='font-light'>Interior Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
