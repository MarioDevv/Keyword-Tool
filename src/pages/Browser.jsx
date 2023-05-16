import Navbar from '../components/Navbar'
import UploadZone from '../components/browser/UploadZone'
import { Typography } from "@material-tailwind/react";

const Console = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-[90vh] gap-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Typography variant="h2" className="font-mon">
                            Upload your files
                        </Typography>
                        <Typography variant="paragraph" className="text-justify font-mon">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet est sit amet molestie sagittis.
                        </Typography>
                    </div>
                    <UploadZone />
                </div>
            </div>
        </>
    )
}

export default Console