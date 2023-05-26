import React from "react"
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full p-5">
            <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography as="a" href="#" color="blue-gray" className="transition-colors font-mon hover:text-blue-500 focus:text-blue-500">
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography as="a" href="#" color="blue-gray" className="transition-colors font-mon hover:text-blue-500 focus:text-blue-500">
                            Contact
                        </Typography>
                    </li>
                    <li>
                        <Link to="https://github.com/MarioDevv/Keyword-Tool" color="blue-gray" className="transition-colors font-mon hover:text-blue-500 focus:text-blue-500">
                            Docs
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-100" />
            <Typography color="blue-gray" className="font-semibold text-center font-mon">
                &copy; 2023 Keyword Research Tool
            </Typography>
        </footer>
    );
}

export default Footer;