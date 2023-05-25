import React from "react"
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

// Components
import Stepper from "./Stepper";


const Documentation = () => {
    return (
        <div className="flex justify-center gap-20 mt-12">
            <div className="flex flex-col w-1/3">

                <Typography variant="h3" className="mb-4 font-mon">
                    Quick Start
                </Typography>
                <div className="flex flex-col gap-6">
                    <div className="p-5 text-center bg-gray-100 rounded-lg">
                        <Typography className="text-justify font-mon text-[15px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet est sit amet molestie sagittis.
                            Etiam dictum non erat in interdum. Suspendisse a lectus sit amet dui congue congue.
                            Cras elementum imperdiet felis, id gravida ex rhoncus eu.
                            Fusce iaculis nulla ut ipsum dapibus, vel euismod nulla pharetra.
                            Nulla orci augue, tristique at dolor ut, consectetur ullamcorper leo.
                            Praesent elementum cursus metus, at porttitor velit auctor eget.
                            Proin efficitur pulvinar odio, in ullamcorper ante euismod vel.
                            In hac habitasse platea dictumst. Nullam vehicula arcu velit, at imperdiet justo rhoncus a.
                        </Typography>
                    </div>
                    <div className="p-5 text-center bg-gray-100 rounded-lg">
                        <Typography className="text-justify font-mon text-[15px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet est sit amet molestie sagittis.
                            Etiam dictum non erat in interdum. Suspendisse a lectus sit amet dui congue congue.
                            Cras elementum imperdiet felis, id gravida ex rhoncus eu.
                            Fusce iaculis nulla ut ipsum dapibus, vel euismod nulla pharetra.
                            Nulla orci augue, tristique at dolor ut, consectetur ullamcorper leo.
                            Praesent elementum cursus metus, at porttitor velit auctor eget.
                            Proin efficitur pulvinar odio, in ullamcorper ante euismod vel.
                            In hac habitasse platea dictumst. Nullam vehicula arcu velit, at imperdiet justo rhoncus a.
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
                <Stepper />
            </div>
        </div>
    );
}

export default Documentation;