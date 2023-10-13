import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
            <section className='shop flex justify-center'>
                <div className='text-center w-[57vw] flex flex-col items-center gap-10 pt-12'>
                    <h1 className='font-semibold text-5xl'>Interested? Shop This Plant Collection!</h1>
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                    <button className='bg-bg-color text-white text-[1rem] px-7 py-2 rounded-full'>Shop Now</button>
                </div>
            </section>
        )
    }
}
