import { Montserrat } from "next/font/google";
import "styles/globals.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Forage Albuquerque",
  description: "A guide to Albuquerque's edible plants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="App">
          <Header />
          <NavBar />
          <div className="content-container">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
