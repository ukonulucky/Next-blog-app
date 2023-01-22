
import Banner from "../../components/Banner";
import Header from "../../components/header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
       <Header />
       <Banner />
        {children}
        </body>
    </html>
  )
}
