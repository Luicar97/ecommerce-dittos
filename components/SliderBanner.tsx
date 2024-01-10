"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Box from '@mui/material/Box';

export default function SliderBanner() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        // autoplay: true,
    };

    return (
        <Slider {...settings}>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
            <Box>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://dummyimage.com/900x350/000/fff" alt="" />
            </Box>
        </Slider>
    );
}
