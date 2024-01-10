"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";

export default function SliderProducts() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        // autoplay: true,
        // Hacer responsive luego
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <Box >
            <Slider {...settings}>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box >
                        <img style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14, }} src="https://dummyimage.com/202x202/000/fff" alt="" />
                    </Box>
                    <Box width={202} sx={{ paddingTop: '5px', paddingBottom: '14px', backgroundColor: 'white', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, }}>
                        <Box paddingLeft='6px'>
                            <Typography variant="body2" color="initial">Camisa hawaiana amarilla</Typography>
                            <Box>
                                <Typography variant="body1" color="initial" fontWeight='bold'>S/ 26.00</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#ffac53' }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                        </Box>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
}
