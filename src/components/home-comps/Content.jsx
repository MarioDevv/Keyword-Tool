import { useState, useEffect } from "react"

// Componentes
import HeroSection from "./HeroSection"
import Cards from "./Cards"
import Documentation from "./Documentation"
import Footer from "../Footer"
import WorkUs from "./WorkUs"


export default function Content() {

    const cards_description = {
        "Indexing Console": "The Indexing Console is a web application that allows you to index your data into the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search UI": "The Search UI is a web application that allows you to search your data in the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search API": "The Search API is a REST API that allows you to search your data in the Azure Cognitive Search service. It is a REST API built using Node.js and Express."
    }

    return (
        <>
            <HeroSection />   {/* Hero Section */}
            <Documentation /> {/* Documentation */}
            <div className="flex flex-col items-center gap-10 mt-16">   {/* Cards */}
                <div className="flex justify-center gap-20 ">
                    {Object.keys(cards_description).map((key, index) => {
                        {/* Map through the cards_description object */ }
                        return (
                            <Cards title={key} key={index} description={cards_description[key]} />
                        )
                    })}
                </div>
            </div>
            <WorkUs />  {/* Work with us */}
        </>

    )
}