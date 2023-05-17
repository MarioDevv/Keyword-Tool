import React from "react"
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";

const Steps = () => {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        1
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Log in to Ahrefs
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Login into your Ahrefs account
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        2
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Keywords Explorer
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Go to the Keywords Explorer
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        3
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Export to CSV
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Export the keywords to a CSV
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        4
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Number of keywords
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Select the number of keywords per topic
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        5
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Accuracy of the Tool
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Select the accuracy of the tool
                    </Typography>
                </TimelineBody>
            </TimelineItem>
            <TimelineItem>
                <TimelineHeader>
                    <TimelineIcon className="flex items-center justify-center w-10 h-10 ">
                        6
                    </TimelineIcon>
                    <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                        Download the CSV
                    </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                        Download the CSV file with the keywords
                    </Typography>
                </TimelineBody>
            </TimelineItem>
        </Timeline>
    );
}

export default Steps;

