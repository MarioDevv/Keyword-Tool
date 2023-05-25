import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";

const Pixelator = () => {
    return (
        <main className="flex flex-col justify-between h-screen ">
            <NavbarMenu />
            <Pixelizer />
            <Footer />
        </main>
    )
}

export default Pixelator;