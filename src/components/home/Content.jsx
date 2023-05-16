// Componentes
import HeroSection from "./HeroSection"
import Cards from "./Cards"
import Documentation from "./Documentation"
import WorkUs from "./WorkUs"


const Content = () => {

    const cards_description = {
        "Indexing Console": "The Indexing Console is a web application that allows you to index your data into the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search UI": "The Search UI is a web application that allows you to search your data in the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search API": "The Search API is a REST API that allows you to search your data in the Azure Cognitive Search service. It is a REST API built using Node.js and Express."
    }

    return (
        <>
            <HeroSection />   {/* Hero Section */}
            <Documentation /> {/* Documentation */}
            <div className="flex justify-center gap-10 mt-12 "> {/* Cards */}
                {Object.keys(cards_description).map((key, index) => {
                    {/* Map through the cards_description object */ }
                    return (
                        <Cards title={key} key={index} description={cards_description[key]} />
                    )
                })}
            </div>
            <WorkUs />  {/* Work with us */}
        </>

    )
}

export default Content