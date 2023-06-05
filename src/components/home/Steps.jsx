import React from "react";

import {
    Typography,
    TimelineItem,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    TimelineConnector
} from "@material-tailwind/react"

const Steps = (props) => {
    

    return (
        <TimelineItem>
            <TimelineHeader>
                {props.lastItem ? null : <TimelineConnector />}
                <TimelineIcon color="blue" className="flex items-center justify-center w-10 h-10">
                    {props.icon + 1}
                </TimelineIcon>
                <Typography variant="paragraph" color="blue-gray" className="font-semibold font-mon">
                    {props.title}
                </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
                <Typography color="gray" variant="small" className="font-normal text-gray-700 font-mon">
                    {props.description}
                </Typography>
            </TimelineBody>
        </TimelineItem>
    )
}

export default Steps