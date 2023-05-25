import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, Button } from "@material-tailwind/react";
import useConvertJSONtoCSV from '../../hooks/useConvertJSON';
import FormContent from './FormContent';
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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        Swap ? (
            loading ? (
                <LoadingContent />
            ) : (
                showDonwload ? (
                    <DownloadContent />
                ) : (
                    <FormContent 
                        selectedFile={selectedFile}
                        handleSumbit={handleSumbit}
                        onCancel={() => setSwap(false)}
                    />
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
