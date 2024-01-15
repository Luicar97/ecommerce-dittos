"use client"

import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

import SliderProduct from '@/components/SliderProducts';

//img
import mybestfriend from '../../public/assets/img/mybestfriend.svg';

// icons
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import InventoryIcon from '@mui/icons-material/Inventory';
import React from "react";
import useScreenSize from "@/hooks/UseScreenSize";


export default function ProductPage() {

    const { width, height } = useScreenSize();

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box>
            <Box height={40} ></Box>

            <Box sx={{ flex: 1, flexDirection: (width! < 903 ? 'column' : 'row'), display: 'flex' }}>
                <Box sx={{ width: (width! < 903 ? 'none' : '60%'), display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: (width! < 903 ? '0px' : '24px') }}>
                    <img style={{ borderRadius: 14, maxWidth: '100%' }} src={mybestfriend.src} alt="" />
                </Box>
                <Box height={(width! < 903 ? 40 : 0)} ></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', borderColor: '#ffac53', borderStyle: 'solid', justifyContent: 'space-between', width: (width! < 903 ? 'none' : '40%'), backgroundColor: 'white', borderRadius: '14px', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}>
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
            <Box height={30} ></Box>
            <Box>
                <Typography variant="h5" color="initial" fontWeight='bold' sx={{ color: '#501f17' }} >Descripción:</Typography>
                <Box height={12}  ></Box>
                <Box sx={{ backgroundColor: 'white', borderRadius: '14px', padding: 2 }}>
                    <Typography variant="body1" color="initial" sx={{ lineHeight: 1.7 }} >
                        ¡Haz que tu peludo amigo brille con estilo tropical! 🌺🐾 Presentamos nuestra encantadora camisa hawaiana para perros, ¡la clave para que tu mascota deslumbre en cualquier ocasión bajo el sol! ☀️🏝️ <br /> <br />

                        <strong>Características que amarás:</strong> <br />

                        🌟 Diseño Colorido y Alegre: La camisa está impregnada con patrones tropicales vibrantes, ¡asegurando que tu perro sea el centro de atención con su estilo tropical único! 🎉🐶 <br />
                        🏖️ Comodidad Inigualable: Fabricada con telas suaves y transpirables, esta camisa garantiza que tu peludo amigo esté fresco y cómodo durante sus paseos o días de relax. ¡Nada mejor que la comodidad con estilo! 😎🐕 <br />
                        🔄 Fácil de Poner y Quitar: Con cierre de velcro en la parte abdominal, vestir a tu mascota es pan comido. ¡Sin estrés ni complicaciones, solo diversión instantánea! 🔄👕 <br />
                        💪 Durabilidad Garantizada: Construida con materiales de alta calidad, esta camisa hawaiana es resistente y está lista para soportar las travesuras diarias de tu amigo de cuatro patas. ¡Prepárate para aventuras sin límites! 🌈🐾 <br />
                        📏 Variedad de Tallas: Disponible en tallas que se adaptan a perros pequeños, medianos y grandes. ¡Asegúrate de medir a tu mascota para encontrar el ajuste perfecto y hacerlo lucir increíble! 📏🐩 <br /> <br />

                        Con nuestra camisa hawaiana para perros, tu mascota estará lista para ser la estrella en cualquier evento, desde fiestas temáticas hasta relajados días en casa. ¡Agrega un toque tropical a la vida de tu peludo amigo y haz que cada día sea una celebración! 🎊🌴 ¡Compra ahora y lleva el espíritu aloha a tu hogar! 🌺🐕
                    </Typography>
                </Box>
            </Box>
            <Box height={40} ></Box>
            <Box sx={{ backgroundColor: '#ffac53E6', paddingTop: '24px', paddingBottom: '40px', borderRadius: '12px' }}>
                <SliderProduct title={'Transforma el tiempo de juego en momentos inolvidables.'} subtitle={'¡Descubre la magia de jugar con nuestros juguetes de temporada!'} />
            </Box>
            <Box height={40} ></Box>
        </Box >
    );
}