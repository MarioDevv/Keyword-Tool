import React from "react"
import { Typography, Button } from "@material-tailwind/react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const WorkUs = () => {
    return (
        <div className="flex justify-center gap-10 mt-8">
            <div className="relative flex items-center justify-center">
                <div className="absolute z-[1] pl-10 text-center flex-col">
                    <Typography variant="h3" color="white" className="font-mon">
                        Work with me!
                    </Typography>
                    <Typography variant="paragraph" color="white" className="font-mon">
                        I am always looking for new opportunities to learn and grow.
                    </Typography>
                    <div className="flex justify-center gap-5 mt-4">
                        <Button color="white" size="sm">
                            <FaGithub size={23} />
                        </Button>
                        <Button color="white" size="sm">
                            <FaLinkedinIn size={23} />
                        </Button>
                        <Button color="white" size="sm">
                            <SiGmail size={23} />
                        </Button>
                    </div>
                </div>
                <img src="/workus.webp" className="aspect-[9/2] object-cover brightness-25" />
            </div>
        </div>
    )
}

export default WorkUs