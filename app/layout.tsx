import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { MaterialTheme } from "@/components/Material";
import Sidebar from "@/components/Sidebar";
import Container from "@mui/material/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MaterialTheme>
            <Sidebar />
            <Container maxWidth="md">{children}</Container>
          </MaterialTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
