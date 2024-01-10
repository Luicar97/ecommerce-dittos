"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";

//img
import corgiLoves from '../public/assets/img/corgiloves.svg';


interface SliderProducts {
    title: String,
    subtitle: String
}


export default function SliderProducts(props: SliderProducts) {

    var settings = {
        // dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        // slidesToScroll: 2,
        centerMode: true,
        // arrows: true,
        // adaptiveHeight: false,
        // autoplay: true,
        // Hacer responsive luego
        arrows: false,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                    infinite: false,
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    infinite: false,
                }
            }
        ]
    };

    return (
        <Box >

            <Box sx={{ paddingLeft: '26px', paddingBottom: 3 }}>
                <Typography variant="h6" color="initial" fontWeight='bold' sx={{ color: '#501f17' }} >{props.title}</Typography>
                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>{props.subtitle}</Typography>
            </Box>

            <Box sx={{ paddingLeft: '14px', paddingRight: '14px' }}>
                <Slider className="sliderProducts" {...settings}>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Box >
                            <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src={corgiLoves.src} alt="" />
                        </Box>
                        <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                            <Box paddingLeft='6px'>
                                <Typography variant="body2" color="initial" sx={{ color: '#501f17' }}>Camisa hawaiana amarilla</Typography>
                                <Box>
                                    <Typography variant="body1" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>S/ 26.00</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                </Slider>
            </Box>
        </Box>
    );
}

