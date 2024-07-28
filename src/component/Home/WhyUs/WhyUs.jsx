import React from 'react';
import img1 from '../WhyUs/images/premium_products.png';
import img2 from '../WhyUs/images/expert_support.jpg';
import img3 from '../WhyUs/images/Competitive-Pricing.webp';
import img4 from '../WhyUs/images/easy_return.png';

const WhyUs = () => {
    return (
        <div className="text-center p-8 my-20 w-3/4 mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Why to choose US?
            </h2>

            <div className="flex flex-wrap items-center mt-10 text-left ">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src= {img1} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Premium Quality Products                    </h3>
                    <p className="sm:text-lg mt-6">
                    We offer a curated selection of the latest and greatest tech products from top brands. Each item is handpicked for its quality, performance, and value, ensuring you get the best technology available.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img2} alt="project members" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Expert Support
                    </h3>
                    <p className="sm:text-lg mt-6">
                    Our knowledgeable support team is here to help you every step of the way. Whether you need advice on which product to choose or help with a purchase, we provide expert guidance and personalized support.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left ">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img3} alt="editor" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Competitive Prices
                    </h3>
                    <p className="sm:text-lg mt-6">
                    Get the best deals on your favorite tech products. We regularly compare prices and offer competitive rates, so you can shop with confidence knowing you're getting the best value for your money.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img4} alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                    Easy Returns and Exchanges                    </h3>
                    <p className="sm:text-lg mt-6">
                    Shop with confidence knowing that if you're not completely satisfied with your purchase, we offer hassle-free returns and exchanges. Our customer-centric return policy is designed to make your shopping experience smooth and worry-free.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;