import React from 'react';
import ImageSlider from './Carousel';
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import './hero.css'

function Hero() {
    const images = [
        {
            url: 'src/assets/slider/boat.jpg',
            caption: 'Boat House Tourism in 5th Level',
        },
        {
            url: 'src/assets/slider/gold coin.jpg',
            caption: '1 Carat Gold Coin in 7th Level',
        },
        {
            url: 'src/assets/slider/jewellery.jpg',
            caption: '10 Carat Gold Jewell in 10th Level',
        },
    ];
    return (
        <>
            <div className="hero">

                <div className='slider'>
                    <ImageSlider images={images} />
                </div>
                <section className="bg-[#4f1c4c] -mt-36">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="p-1 text-center inline-flex items-center justify-center mb-3 ">
                                            <IoMdPersonAdd className='w-16 h-16' />
                                        </div>
                                        <h6 className="text-xl font-semibold">Bonus Rs.500</h6>
                                        <p className="mt-1 mb-4 text-gray-300">
                                            Every Refer Per Person
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="p-1 text-center inline-flex items-center justify-center mb-3">
                                            <GiHomeGarage className='w-16 h-16' />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Funds
                                        </h6>
                                        <p className="mt-1 mb-4 text-gray-300">
                                            Car Fund, Housing Fund Payment
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className=" box relative flex flex-col min-w-0 break-words w-full mb-8 rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="p-1 text-center inline-flex items-center justify-center mb-3">
                                            <MdGroupAdd className='w-16 h-16' />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Bonus Rs.10,000
                                        </h6>
                                        <p className="mt-1 mb-4 text-gray-300">
                                            Direct 27 Referal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero