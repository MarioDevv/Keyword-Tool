import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, Button } from "@material-tailwind/react";
import useConvertJSONtoCSV from '../../hooks/useConvertJSON';

const UploadZone = () => {

    const [Swap, setSwap] = React.useState(false);
    const [showDonwload, setShowDonwload] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState(false);
    // Hook to convert JSON to CSV
    const csv_file = useConvertJSONtoCSV(data);

    const onDrop = React.useCallback((file) => {
        setSelectedFile(file[0]);
        setSwap(true);
    }, []);

    const handleSumbit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        formData.append('file', selectedFile);
        const res = await fetch('http://localhost:5000/tool', {
            ContentType: 'multipart/form-data',
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        setData(data);
        setLoading(false);
        setShowDonwload(true);
    }

    const Download = (csv) => {
        const downloadLink = document.createElement('a');
        const blob = new Blob([csv], { type: 'text/csv' });
        const href = URL.createObjectURL(blob);
        downloadLink.href = href;
        downloadLink.download = 'keywords.csv';
        downloadLink.dispatchEvent(new MouseEvent('click'));
        URL.revokeObjectURL(href);
        // Return to initial state
        setSwap(false);
    };

    // Components
    const LoadingContent = () => (
        <div className="flex flex-col items-center justify-center w-full gap-20 h-96">
            <Typography variant="lead" className="font-mon">
                Loading...
            </Typography>
        </div>
    );

    const DownloadContent = () => (
        <div className="flex flex-col items-center justify-center w-full gap-20 h-96">
            <Button color="light-blue" size="lg" className="px-4 py-3 font-mon" onClick={() => Download(csv_file)}>
                Download
            </Button>
        </div>
    );

    const FormContent = () => (
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
                    <Button color="gray" size="md" className="px-4 py-3 font-mon" onClick={() => setSwap(false)}>
                        Cancel
                    </Button>
                    <Button color="light-blue" size="md" className="px-4 py-3 font-mon" type='sumbit' >
                        Upload
                    </Button>
                </div>
            </form>
        </div>
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        Swap ? (
            loading ? (
                <LoadingContent />
            ) : (
                showDonwload ? (
                    <DownloadContent />
                ) : (
                    <FormContent />
                ))) : (
            <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} h-96 border-4 border-blue-gray-100 rounded-lg flex items-center flex-col justify-center w-full`}>
                <input {...getInputProps()} />
                {
                    isDragActive ? (
                        <Typography variant="paragraph" className="font-mon animate-wiggle">
                            <span className="font-semibold">Drop</span> it!
                        </Typography>
                    ) : (
                        <>
                            <div className="flex flex-col items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                <Typography variant="paragraph" className="font-mon">
                                    <span className="font-semibold">Drag</span> and drop your files here
                                </Typography>
                            </div>
                            <Typography variant="paragraph" className="text-center font-mon">
                                or click to <span htmlFor="files" className="font-semibold cursor-pointer hover:underline">browse</span>
                            </Typography>
                        </>
                    )
                }
            </div>
        )
    );
}

export default UploadZone
