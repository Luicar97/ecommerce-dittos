import Box from "@mui/material/Box";

//img
import logoCorgi from '../public/assets/img/logo.svg';

//icons
import ReorderIcon from '@mui/icons-material/Reorder';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Container from '@mui/material/Container'

export default function Header() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ height: 90, backgroundColor: 'white', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: '14px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '14px' }}>
                    <ReorderIcon sx={{ color: '#ffac53', fontSize: 40 }} />
                </Box>
                <Box sx={{ position: 'absolute', left: 0, right: 0, top: 5 }}>
                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100px' }} src={logoCorgi.src} alt="" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: '14px' }}>
                    <FavoriteRoundedIcon sx={{ color: '#ffac53', fontSize: 40 }} />
                    <Box width={20} ></Box>
                    <ShoppingCartCheckoutRoundedIcon sx={{ color: '#ffac53', fontSize: 40 }} />
                    <Box width={20} ></Box>
                    <Person2RoundedIcon sx={{ color: '#ffac53', fontSize: 40 }} />
                </Box>
            </Box>
        </Container>

    );
}
