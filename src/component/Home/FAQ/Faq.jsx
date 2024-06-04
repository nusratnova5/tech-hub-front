import React from 'react';

const Faq = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Your Tech Queries, Our Expert Answers
                </h2>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-10">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    1. What types of products do you offer?                </div>
                <div className="collapse-content">
                    <p><span className='font-bold'>Answer:</span> Our inventory includes a wide range of technology products such as laptops, desktops, smartphones, tablets, accessories, and other electronic gadgets from various leading brands.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-5">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    2. What is your return policy?                </div>
                <div className="collapse-content">
                    <p><span className='font-bold'>Answer:</span> We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return the product within 30 days of delivery for a full refund or exchange, provided the product is in its original condition with all packaging and accessories. Visit our returns page for more details.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-5">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    3. Are your products authentic?                </div>
                <div className="collapse-content">
                    <p><span className='font-bold'>Answer:</span> Yes, all our products are 100% authentic. We source our products directly from reputable brands and suppliers to ensure you receive only genuine products.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-5">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    4.Do you provide warranties on your products?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold'>Answer:</span> Yes, we provide warranties on most of our products. The warranty period and terms vary by product and brand. You can find specific warranty information on the product page or contact our customer service for more details.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;