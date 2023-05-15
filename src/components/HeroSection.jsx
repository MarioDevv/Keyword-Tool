import { Typography, Button } from "@material-tailwind/react"


export default function HeroSection() {
    return (
        <div className="relative flex items-center justify-center"> {/* Hero Section */}
            <div className="absolute z-[1]">
                <Typography variant="h2" color="white" className="font-mon">
                    Keyword Researh Tool
                </Typography>
                <Typography variant="lead" color="white" className="font-mon">
                    Organize your keywords by topics with out any hassle.
                </Typography>
                <Button color="white" size="md" className="flex items-center gap-2 mt-6 font-mon">
                    Get Started
                </Button>
            </div>
            <img src="/keywords.webp" className="aspect-[11/3] w-full object-cover brightness-25" />
        </div>
    )
}

