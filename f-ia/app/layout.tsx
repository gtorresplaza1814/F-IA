export const metadata = {
    title: "F-IA",
      description: "Finanzas Inteligentes Aliadas",
      };

      export default function RootLayout({
        children,
        }: {
          children: React.ReactNode;
          }) {
            return (
                <html lang="es">
                      <body>{children}</body>
                          </html>
                            );
                            }