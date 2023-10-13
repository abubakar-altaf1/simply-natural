import React, { Component } from 'react'
import { FaSpa, FaSync } from "react-icons/fa"
import { BsFillBox2Fill } from "react-icons/bs"


export default class Collection extends Component {
    render() {
        return (
            <section className='px-8 py-[3rem] flex flex-col items-center gap-[5rem]'>
                <div className='flex gap-[10rem] '>
                    <div className='grid grid-flow-col gap-x-7 gap-y-1'>
                        <FaSpa className='row-span-3 self-center text-2xl text-icn-color' />
                        <h3 className='font-semibold text-lg'>Plants Collection</h3>
                        <p>Any plants for your space</p>
                    </div>
                    <div className='grid grid-flow-col gap-x-7 gap-y-1'>
                        <BsFillBox2Fill className='row-span-3 self-center text-2xl text-icn-color' />
                        <h3 className='font-semibold text-lg'>Free Shipping</h3>
                        <p>Free shipping on order</p>
                    </div>
                    <div className='grid grid-flow-col gap-x-7 gap-y-1'>
                        <FaSync className='row-span-3 self-center text-2xl text-icn-color' />
                        <h3 className='font-semibold text-lg'>100% Money Back</h3>
                        <p>If the item didn't suit you</p>
                    </div>
                </div>
                <article className='flex gap-12'>
                    <div className='w-[28vw] bg-[#efeef4] py-[1rem] rounded-[20px] flex flex-col items-center'>
                        <img src='./img/plant6.jpg' className='w-[80%] pt-5'/>
                        <div className='w-[28vw] p-5 bg-[#efeef4]'>
                            <h3 className='font-semibold text-lg'>Beautiful Plant Varieties</h3>
                            <p className='text-sm w-[20vw]'>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p className='text-xs text-[red] mt-4 '>SEE COLLECTION</p>
                        </div>
                    </div>
                    <div className='w-[28vw] bg-[#efeef4] py-[1rem] rounded-[20px] flex flex-col items-center'>
                        <img src='./img/cactus2.jpg' className='w-[80%] pt-5'/>
                        <div className='w-[28vw] p-5 bg-[#efeef4]'>
                            <h3 className='font-semibold text-lg'>Trendy Cactus Varieties</h3>
                            <p className='text-sm w-[20vw]'>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p className='text-xs text-[red] mt-4 '>SEE COLLECTION</p>
                        </div>
                    </div>
                    <div className='w-[28vw] bg-[#efeef4] py-[1rem] rounded-[20px] flex flex-col items-center'>
                        <img src='./img/plant4.jpg' className='w-[80%] pt-5'/>
                        <div className='w-[28vw] p-5 bg-[#efeef4]'>
                            <h3 className='font-semibold text-lg'>Gardening Accessories</h3>
                            <p className='text-sm w-[20vw]'>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p className='text-xs text-[red] mt-4 '>SEE COLLECTION</p>
                        </div>
                    </div>

                </article>
            </section>
        )
    }
}
