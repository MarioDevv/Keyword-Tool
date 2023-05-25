import React from "react"
import { Typography, Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center"> {/* Hero Section */}
            <div className="absolute z-[1] text-center">
                <Typography variant="h2" color="white" className="font-mon">
                    Keyword Researh Tool
                </Typography>
                <Typography variant="lead" color="white" className="font-mon">
                    Organize your keywords by topics with out any hassle.
                </Typography>
            </div>
            <img src="/keywords.webp" className="aspect-[11/3] w-full object-cover brightness-25" />
        </div>
    )
}

export default HeroSection

