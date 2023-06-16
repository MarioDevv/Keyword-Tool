import React from "react";
import NavbarMenu from "../components/Navbar";
import Footer from "../components/Footer";
import Pixelizer from "../components/pixelator/Pixelizer";
import { FirebaseContext } from "../config/FirebaseContext";
import { Navigate } from "react-router-dom";

const Pixelator = () => {
    const { auth } = React.useContext(FirebaseContext);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsSignedIn(!!user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Loading...</p>
            </div>
        )
    }   

    if (!isSignedIn) {
        return <Navigate to="/" />;
    }
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