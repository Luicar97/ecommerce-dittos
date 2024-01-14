import Box from '@mui/material/Box';

//components
import SliderBanner from '@/components/SliderBanner';
import SliderProduct from '@/components/SliderProducts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function Home() {
  return (

    //Head
    <Box>
      <Box height={40} ></Box>
      {/* Slider Banner */}
      <SliderBanner />
      <Box height={80} ></Box>
      {/* Slider Products */}
      <SliderProduct title={'Viste el verano con frescura y moda.'} subtitle={'Descrube nuestras prendas de temporada'} />
      <Box height={80} ></Box>
      <Box sx={{ backgroundColor: '#ffac53E6', paddingTop: '24px', paddingBottom: '40px', borderRadius: '12px' }}>
        <SliderProduct title={'Transforma el tiempo de juego en momentos inolvidables.'} subtitle={'¡Descubre la magia de jugar con nuestros juguetes de temporada!'} />
      </Box>
      <Box height={80} ></Box>
      <SliderProduct title={'Viste el verano con frescura y moda.'} subtitle={'Descrube nuestras prendas de temporada'} />
      <Box height={60} ></Box>
    </Box>
  );
}
