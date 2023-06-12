import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";
import { FirebaseContext } from "../config/FirebaseContext";
import { Navigate } from "react-router-dom";

const Pixelator = () => {
    const { auth } = React.useContext(FirebaseContext);

    return (
        <>
            {auth.currentUser === null ?
                (<Navigate to="/" />) :
                (
                    <main className="flex flex-col justify-between h-screen ">
                        <NavbarMenu />
                        <Pixelizer />
                        <Footer />
                    </main>
                )}
        </>
    )
}

export default Pixelator;