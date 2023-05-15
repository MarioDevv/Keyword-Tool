import React from 'react'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/home-comps/Content'

// Spinner
import { Spinner } from "@material-tailwind/react";

const Home = () => {

    const [isLoaded, setIsLoaded] = React.useState(false)
    React.useEffect(() => {
        setIsLoaded(true)
    }, [])


    return (
        <>
            {!isLoaded ? (
                <div className="flex items-center justify-center h-screen">
                    <Spinner color="blue" className='w-12 h-12' />
                </div>
            ) : (
                <>
                    <Navbar />
                    <Content />
                    <Footer />
                </>
            )}
        </>
    )
}

export default Home