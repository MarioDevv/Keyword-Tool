import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";
import { Alert } from "@material-tailwind/react";

const Pixelator = () => {
    const [showAlert, setAlert] = React.useState(false)
    
    return (
        <main className="flex flex-col justify-between h-screen ">
            <NavbarMenu />
            <Pixelizer />
            <Footer />
        </main>
    )
}

export default Pixelator;