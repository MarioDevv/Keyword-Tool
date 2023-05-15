import HeroSection from "./HeroSection"
import Cards from "./Cards"
import Documentation from "./Documentation"
import Footer from "./Footer"
import WorkUs from "./WorkUs"


export default function Content() {
    return (
        <>
            <HeroSection />

            <div className="flex justify-center gap-20 mt-12">  {/* Documentation */}
                <Documentation />
            </div>

            <div className="flex flex-col items-center gap-10 mt-16">   {/* Cards */}
                <div className="flex justify-center gap-20 ">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

            <div className="flex justify-center gap-10 mt-8"> {/* Work with us */}
                <WorkUs />
            </div>

            <Footer />
        </>

    )
}