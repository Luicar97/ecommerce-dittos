import Box from "@mui/material/Box";

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container'

export default function Footer() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ height: 90, backgroundColor: 'white', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', borderRadius: '14px', alignItems: 'center' }}>
                <FacebookIcon sx={{ fontSize: 52 }} />
                <Box width={20} ></Box>
                <XIcon sx={{ fontSize: 52 }} />
                <Box width={20} ></Box>
                <InstagramIcon sx={{ fontSize: 52 }} />
            </Box>
        </Container>
    );
}
