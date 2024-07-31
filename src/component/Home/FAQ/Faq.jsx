import React from 'react';

const Faq = () => {
    return (
        <div className='bg-gray'>
            <div className='grid grid-col-1 lg:grid-cols-2 p-20 gap-5'>
            <div className=''>
                <h1 className='text-accent text-6xl lg:mb-2 mb-8 lg:text-start text-center '>FAQs</h1>
                <p className='text-gray-700 lg:text-start text-center mb-5'>Find answers to common questions about our ceramic products, ordering, shipping, care, and more. If you need further information, feel free to contact our support team.</p>
            </div>

            <div className=' border-2 border-slate-300 '>
                <div className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-accent font-medium">
                        Products we offer               </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'></span> Our inventory includes a wide range of technology products such as laptops, desktops, smartphones, tablets, accessories, and other electronic gadgets from various leading brands.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-accent font-medium">
                        Return policy               </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'></span> We offer a 30-day return policy for most products. If you are not satisfied with your purchase, you can return the product within 30 days of delivery for a full refund or exchange, provided the product is in its original condition with all packaging and accessories. Visit our returns page for more details.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-accent font-medium">
                        Product's authenticity               </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'></span> Yes, all our products are 100% authentic. We source our products directly from reputable brands and suppliers to ensure you receive only genuine products.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-accent font-medium">
                        Product's authenticity               </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'></span> Yes, all our products are 100% authentic. We source our products directly from reputable brands and suppliers to ensure you receive only genuine products.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white rounded-none">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-xl text-accent font-medium">
                        warranties
                    </div>
                    <div className="collapse-content">
                        <p><span className='font-bold'></span> Yes, we provide warranties on most of our products. The warranty period and terms vary by product and brand. You can find specific warranty information on the product page or contact our customer service for more details.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;