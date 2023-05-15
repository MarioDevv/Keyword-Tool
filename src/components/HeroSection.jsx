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
                <Button color="white" size="md" className="flex items-center gap-2 mt-4 font-mon">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Button>
            </div>
            <img src="/keywords.jpg" className="aspect-[11/3] w-full object-cover brightness-25" />
        </div>
    )
}

