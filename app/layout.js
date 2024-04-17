import "./globals.css";
import { League_Spartan } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "KOJI - Digital Marketing Agency",
  description:
    "KOJI is your Growth-Driven Digital Wizards. We specialize in crafting data-driven strategies to fuel business growth. From targeted campaigns to optimizing online presence, we propel brands to success in the digital realm. Partner with us to unlock your business's full potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
  ``;
}
