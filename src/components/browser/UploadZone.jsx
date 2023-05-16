import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from "@material-tailwind/react";


const UploadZone = () => {

    const [Swap, setSwap] = useState(false);

    const onDrop = useCallback((file) => {
        localStorage.setItem('file', file);
        setSwap(true);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        Swap ? (
            <div className="flex flex-col items-center justify-center gap-2">
                Miguel ere gay
            </div>
        ) : (
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


export default UploadZone;
