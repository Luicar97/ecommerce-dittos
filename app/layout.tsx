import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { MaterialTheme } from "@/components/Material";
import Sidebar from "@/components/Sidebar";
import Container from "@mui/material/Container";
import './globals.css'

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
            <Container maxWidth="xl" >{children}</Container>
          </MaterialTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
