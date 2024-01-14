"use client"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

//img
import mybestfriend from '../../public/assets/img/mybestfriend.svg';

// icons
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import InventoryIcon from '@mui/icons-material/Inventory';
import React from "react";


export default function ProductPage() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box>
            <Box height={40} ></Box>
            <Box sx={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
                <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '24px' }}>
                    <img style={{ borderRadius: 14, maxWidth: '100%' }} src={mybestfriend.src} alt="" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', borderColor: '#ffac53', borderStyle: 'solid', justifyContent: 'space-between', width: '40%', backgroundColor: 'white', borderRadius: '14px', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}>
                    <Box>
                        <Typography variant="h4" color="initial" fontWeight='bold' sx={{ color: '#501f17' }}>Camisa Hawaiana</Typography>
                        <Box sx={{ height: '4px' }}></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <LocalFireDepartmentIcon sx={{ color: '#e13f3f' }} />
                            <Typography variant="body1" color="initial" fontWeight='500' sx={{ color: '#e13f3f' }}>3 ventas en las últimas 10 hrs</Typography>
                        </Box>
                        <Box sx={{ height: '8px' }}></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Typography variant="caption" color="initial" fontWeight='600' sx={{ color: '#501f17' }}>Disponibilidad: 5 en Stock</Typography>
                            <InventoryIcon sx={{ fontSize: 14, paddingLeft: '4px' }} />
                        </Box>
                        <Box sx={{ height: '4px' }}></Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Typography variant="h6" color="initial" fontWeight='bold' sx={{ textDecoration: 'line-through', color: '#501f17' }}>S/. 32</Typography>
                            <Box sx={{ width: '10px' }}></Box>
                            <Typography variant="h5" color="initial" fontWeight='bold' sx={{ color: '#e13f3f' }}>S/. 27</Typography>
                        </Box>
                        <Box sx={{ height: '8px' }}></Box>
                        <Typography variant="body2" color="initial" sx={{ color: '#501f17' }} >Impuesto incluido. Los gastos de envío se calculan dependiendo del distrito.</Typography>
                        <Box sx={{ height: '8px' }}></Box>
                        <Typography variant="body2" color="initial" fontWeight='bold' sx={{ color: '#501f17' }} >Tallas disponibles:</Typography>
                        <Box sx={{ height: '4px' }}></Box>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tallas</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Tallas"
                                onChange={handleChange}
                            >
                                <MenuItem value={'S'}>S</MenuItem>
                                <MenuItem value={'M'}>M</MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ paddingTop: '8px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#7b3f04', width: '100%' }} onClick={() => { }}><Typography variant="body2" color="white" fontWeight='bold'>NUESTRAS TALLAS</Typography></Button>
                        <Box height='12px'></Box>
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#ffac53', width: '100%' }} onClick={() => { }}><Typography variant="body2" color="white" fontWeight='bold'>COMPRAR</Typography></Button>
                    </Box>

                </Box>
            </Box>
            <Box height={40} ></Box>
        </Box >
    );
}