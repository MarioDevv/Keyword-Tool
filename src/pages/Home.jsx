// Components
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Cards from '../components/home/Cards'
import Footer from '../components/Footer'


// Material Tailwind
import {
    Typography,
    Button,
    Timeline,
    TimelineItem,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    TimelineConnector
} from "@material-tailwind/react"

// Icons
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Steps from '../components/home/Steps'

const Home = () => {

    const cards_description = {
        "Indexing Console": "The Indexing Console is a web application that allows you to index your data into the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search UI": "The Search UI is a web application that allows you to search your data in the Azure Cognitive Search service. It is a single page application built using React and Tailwind CSS.",
        "Search API": "The Search API is a REST API that allows you to search your data in the Azure Cognitive Search service. It is a REST API built using Node.js and Express. It is also available as a Docker image."
    }

    const stepper = {
        "Log in to Ahrefs": "Login into your Ahrefs account",
        "Keywords Explorer": "Go to the Keywords Explorer",
        "Export to CSV": "Export the keywords to a CSV file",
        "Number of keywords": "Select the number of keywords per topic",
        "Download CSV": "Download the CSV file with the keywords",
    }

    return (
        <>
            <Navbar /> {/* Navbar */}

            {/* Hero Section */}
            <div className="relative flex items-center justify-center">
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
            {/* End of Hero Section */}

            {/* Steps */}
            <div className="flex justify-center gap-20 mt-12">
                <div className="flex flex-col w-1/3">

                    <Typography variant="h3" className="mb-4 font-mon">
                        Quick Start
                    </Typography>
                    <div className="flex flex-col gap-6">
                        <div className="p-5 text-center bg-gray-100 rounded-lg">
                            <Typography className="text-justify font-mon text-[15px]">
                                With KRT Keyword Research Tools, you not only get the most relevant keywords,
                                but also exceptional support. Our team of experts is committed to providing the
                                assistance you need to make the most of the tool. Furthermore, we are constantly
                                updating and improving our features to ensure you stay at the forefront of the
                                latest keyword research trends. Discover the ultimate tool for optimizing your
                                content and maximizing your online visibility. Don't wait any longer, join the
                                KRT community now and reach new levels of success!
                            </Typography>
                        </div>
                        <Link to="/browser">
                            <Button color="blue" size="lg" fullWidth>
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="gap-10 mt-16">
                    <Timeline>
                        {Object.keys(stepper).map((key, index, array) => {
                            const isLastItem = index === array.length - 1;
                            return (
                                <Steps title={key} description={stepper[key]} icon={index} lastItem={isLastItem} key={index} />
                            )
                        })}
                    </Timeline>
                </div>
            </div>
            {/* End of Steps */}

            {/* Cards */}
            <div className="flex justify-center gap-10 mt-12 "> {/* Cards */}
                {Object.keys(cards_description).map((key, index) => {
                    return (
                        <Cards title={key} key={index} description={cards_description[key]} />
                    )
                })}
            </div>
            {/* End of Cards */}

            {/* Work with me */}
            <div className="flex justify-center gap-10 mt-8 mb-12"> {/* Work with me */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute z-[1] text-center flex-col">
                        <Typography variant="h3" color="white" className="font-mon">
                            Work with me!
                        </Typography>
                        <Typography variant="paragraph" color="white" className="font-mon">
                            I am always looking for new opportunities to learn and grow.
                        </Typography>
                        <div className="flex justify-center gap-5 mt-4">
                            <Link to="https://github.com/MarioDevv">
                                <Button color="white" size="sm">
                                    <FaGithub size={23} />
                                </Button>
                            </Link>
                            <Link to="https://www.linkedin.com/in/mariopmdev/">
                                <Button color="white" size="sm">
                                    <FaLinkedinIn size={23} />
                                </Button>
                            </Link>
                            <Button color="white" size="sm">
                                <SiGmail size={23} />
                            </Button>
                        </div>
                    </div>
                    <img src="/workus.webp" className="aspect-[9/2] object-cover brightness-25" />
                </div>
            </div>
            {/* End of Work with me */}

            <Footer /> {/* Footer */}
        </>
    )
}
export default Home