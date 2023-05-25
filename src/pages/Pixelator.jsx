import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";
import { Alert } from "@material-tailwind/react";

const Pixelator = () => {
    const [showAlert, setAlert] = React.useState(false)
    
    return (
        <main className="relative flex flex-col items-center h-screen">
            <NavbarMenu />
            <Pixelizer />
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </main>
    )
}

export default Pixelator;