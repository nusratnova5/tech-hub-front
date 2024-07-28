import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import SingleBrand from './SingleBrand';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
    const [products, setProducts] = useState([]);

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');

    const getUniqueBrands = (data) => {
        const brands = data.map(item => item.brand);
        return [...new Set(brands)];
    };

    const brands = getUniqueBrands(products);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (token) {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    };
                    const url = `${import.meta.env.VITE_API_URL}/products`;
                    const response = await axios.get(url, config);
                    setProducts(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [token]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className='slider-container w-3/4 mx-auto'>     
                <div className='text-center my-20'>
                    <h3 className='text-5xl text-accent font-bold mb-10'>Our Exclusive Brands</h3>
                    <div className=''>
                    <Slider {...settings}>
                        {brands?.map(brand => (
                            <SingleBrand brand={brand} key={brand} />
                        ))}
            </Slider>
                    </div>
                </div>
        </div>
    );
};

export default Brands;