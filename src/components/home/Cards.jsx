import React from "react"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Cards = (props) => {
    return (
        <>
            <Card className="mt-6 w-96">
                <CardBody>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-8 h-8 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <Typography variant="h5" color="blue-gray" className="mb-2 font-mon">
                        {props.title}
                    </Typography>
                    <Typography variant="paragraph" className="font-mon">
                        {props.description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#" className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2 font-mon">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </>
    );
}

export default Cards