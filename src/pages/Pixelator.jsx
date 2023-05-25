import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";
import { Alert } from "@material-tailwind/react";

const Pixelator = () => {
    const [showAlert, setAlert] = React.useState(false)

    const handleCopy = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }
            , 2000)
    }
    return (
        <main className="relative flex flex-col items-center h-screen">
            <NavbarMenu />
            <Pixelizer onHandleCopy={handleCopy} />
            {showAlert && (
                <Alert color="blueGray" className="flex justify-center w-1/2 mt-8">
                    Copy to clipboard successfully! 😊
                </Alert>
            )}
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </main>
    )
}

export default Pixelator;