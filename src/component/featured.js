import React, { Component } from 'react'

export default class Featured extends Component {
    render() {
        return (
            <section className='px-20 py-44 flex flex-col gap-28'>
                <div className='text-center'>
                    <h1 className='font-semibold text-4xl pb-6'>Featured Plants</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <article className='flex flex-wrap gap-6'>
                    <div className='w-[20vw]'>
                        <img src='./img/plant3.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Boncellensis Secullant</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/cactus2.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Cleistocactus</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/plant5.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Green Soil Lotus</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/cactus4.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Money Plant</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/plant4.jpg' className='' />
                        <h6 className='py-2'>Cactus</h6>
                        <h3 className='font-medium pb-2'>Old Lady Cactus</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/plant6.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Piorro Quisquam</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/cactus6.jpg' className='' />
                        <h6 className='py-2'>Plants</h6>
                        <h3 className='font-medium pb-2'>Rattle Snake Tail</h3>
                        <h3>$34.00</h3>
                    </div>
                    <div className='w-[20vw]'>
                        <img src='./img/plant3.jpg' className='' />
                        <h6 className='py-2'>Cactus</h6>
                        <h3 className='font-medium pb-2'>Star Cactus</h3>
                        <h3>$30.00</h3>
                    </div>
                </article>
            </section>
        )
    }
}
