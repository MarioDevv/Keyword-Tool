import React from "react"
import Navbar from '../components/Navbar'
import UploadZone from '../components/browser/UploadZone'
import Footer from '../components/Footer'
import { Typography } from "@material-tailwind/react";
import { FirebaseContext } from "../config/FirebaseContext";
import { Navigate } from "react-router-dom";


const Console = () => {
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
        <main className="h-[100vh] flex flex-col">
            <Navbar />
            <div className="flex items-center justify-center h-full p-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Typography variant="h2" className="font-mon">
                            Upload your files
                        </Typography>
                        <Typography variant="paragraph" className="text-justify font-mon">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet est sit amet molestie sagittis.
                        </Typography>
                    </div>
                    <UploadZone />
                </div>
            </div>
            <Footer />
        </main >
    );
};



export default Console