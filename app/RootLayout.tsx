import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { MaterialTheme } from "@/components/Material";
import Sidebar from "@/components/Sidebar";
import Container from "@mui/material/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="ContainerBody">
                <AppRouterCacheProvider>
                    <MaterialTheme>
                        <Sidebar />
                        <Header />
                        <Container maxWidth="xl">{children}</Container>
                        <Footer />
                    </MaterialTheme>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
