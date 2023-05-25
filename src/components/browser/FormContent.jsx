import React from "react";
import { Typography, Button } from "@material-tailwind/react";

const FormContent = ({ selectedFile, handleSumbit, onCancel }) => (
    <div className="flex items-center justify-center w-full h-96">
        <form className="flex flex-col items-center w-1/2 gap-5" onSubmit={handleSumbit}>
            <div className='flex justify-between w-full'>
                <Typography variant="paragraph" className="w-2/3 font-mon">
                    <span className="font-semibold">File</span > name:
                </Typography>
                <Typography variant="paragraph" className="font-mon">
                    {selectedFile && selectedFile.name ? selectedFile.name : 'No file selected'}
                </Typography>
            </div>
            <div className='flex justify-between w-full'>
                <Typography variant="paragraph" className="w-2/3 font-mon">
                    <span className="font-semibold">File</span> size:
                </Typography>
                <Typography variant="paragraph" className="font-mon">
                    {selectedFile && selectedFile.size ? (selectedFile.size / 1024).toFixed(2) : 'No file selected'} KB
                </Typography>
            </div>
            <div className='flex justify-between w-full'>
                <Typography variant="paragraph" className="w-2/3 font-mon">
                    <span className="font-semibold">Topics</span> Number:
                </Typography>
                <div className="font-mon">
                    <input type="number" className='py-1 text-center border rounded-lg outline-none w-14 border-blue-gray-200' min={1} name="topics" required />
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <Typography variant="paragraph" className="w-2/3 font-mon">
                    <span className="font-semibold">Words</span> Number:
                </Typography>
                <div className="font-mon">
                    <input type="number" className='py-1 text-center border rounded-lg outline-none w-14 border-blue-gray-200' min={3} name="words" required />
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <Typography variant="paragraph" className="w-2/3 font-mon">
                    Tool <span className="font-semibold">Accuracy</span>:
                </Typography>
                <div className="flex items-center font-mon">
                    <input type='range' className='w-40' min={0} max={40} name="accuracy" required />
                </div>
            </div>
            <div className='flex w-full mt-4 justify-evenly'>
                <Button color="gray" size="md" className="px-4 py-3 font-mon" onClick={onCancel}>
                    Cancel
                </Button>
                <Button color="light-blue" size="md" className="px-4 py-3 font-mon" type='sumbit' >
                    Upload
                </Button>
            </div>
        </form>
    </div>
);

export default FormContent;