import { Typography, Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center"> {/* Hero Section */}
            <div className="absolute z-[1]">
                <Typography variant="h2" color="white" className="font-mon">
                    Keyword Researh Tool
                </Typography>
                <Typography variant="lead" color="white" className="mb-4 font-mon">
                    Organize your keywords by topics with out any hassle.
                </Typography>
                <Link to="/browser">
                    <Button color="white" size="lg" className="flex items-center gap-2 font-mon">
                        Get Started
                    </Button>
                </Link>
            </div>
            <img src="/keywords.webp" className="aspect-[11/3] w-full object-cover brightness-25" />
        </div>
    )
}

export default HeroSection

