import { Typography, Button } from "@material-tailwind/react";
import Stepper from "./Stepper";
export default function Documentation() {
    return (
        <>
            <div className="flex flex-col w-1/3 itema-center">
                <Typography variant="h3" className="mb-4 font-mon">
                    Quick Start
                </Typography>
                <div className="flex flex-col gap-6">
                    <div className="p-5 text-center bg-gray-100 rounded-lg">
                        <Typography variant="small" className="text-justify font-mon">
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
                        <Typography variant="small" className="text-justify font-mon">
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
                    <Button color="blue" size="lg" fullWidth className="border font-mon">
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="gap-10 mt-16">
                <Stepper />
            </div>
        </>
    );
}