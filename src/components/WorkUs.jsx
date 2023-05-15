import { Typography, Button } from "@material-tailwind/react"
import { FaGithub } from "react-icons/fa";

export default function WorkUs() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute z-[1] pl-10 text-center flex-col">
                <Typography variant="h1" color="white" className="font-mon">
                    Work with me!
                </Typography>
                <Typography variant="lead" color="white" className="font-mon">
                    I am always looking for new opportunities to learn and grow.
                </Typography>
                <Button color="white" className="mt-4">
                    <FaGithub size={25} />
                </Button>
            </div>
            <img src="/workus.jpg" className="aspect-[9/2] object-cover brightness-25" />
        </div>
    )

}