import Box from '@mui/material/Box';

//components
import SliderBanner from '@/components/SliderBanner';
import SliderProduct from '@/components/SliderProducts';
import Header from '@/components/Header';



export default function Home() {
  return (

    //Head
    <Box>
      <Header />
      <Box height={40} ></Box>
      {/* Slider Banner */}
      <SliderBanner />
      <Box height={80} ></Box>
      {/* Slider Products */}
      <SliderProduct />
    </Box>
  );
}
