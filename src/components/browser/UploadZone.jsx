import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, Button } from "@material-tailwind/react";


const UploadZone = () => {

    const [Swap, setSwap] = useState(false);
    const [Filename, setFilename] = useState(false);
    const [Filesize, setFilesize] = useState(false);


    const onDrop = useCallback((file) => {
        localStorage.setItem('file', file);
        setFilename(file[0].name);
        setFilesize(file[0].size);
        setSwap(true);
    }, []);

    const Cancel = () => {
        setSwap(false);
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', localStorage.getItem('file'));
        formData.append('topics', document.getElementById('topics').value);
        formData.append('words', document.getElementById('words').value);
        formData.append('accuracy', document.getElementById('accuracy').value);

        {/* no cors */}
        const res = await fetch('http://localhost:5000/tool', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        console.log(data);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        Swap ? (
            <div className="flex items-center justify-center w-full h-96">
                <form className="flex flex-col items-center w-1/2 gap-5" onSubmit={handleSumbit}>
                    <div className='flex justify-between w-full'>
                        <Typography variant="paragraph" className="w-2/3 font-mon">
                            <span className="font-semibold">File</span> name:
                        </Typography>
                        <Typography variant="paragraph" className="font-mon">
                            {Filename ? Filename : 'No file selected'}
                        </Typography>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Typography variant="paragraph" className="w-2/3 font-mon">
                            <span className="font-semibold">File</span> size:
                        </Typography>
                        <Typography variant="paragraph" className="font-mon">
                            {Filesize ? ((Filesize / 1024).toFixed(2)) : 'No file selected'} KB
                        </Typography>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Typography variant="paragraph" className="w-2/3 font-mon">
                            <span className="font-semibold">Topics</span> Number:
                        </Typography>
                        <div className="font-mon">
                            <input type="number" className='py-1 text-center border rounded-lg outline-none w-14 border-blue-gray-200' min={1} id="topics" required/>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Typography variant="paragraph" className="w-2/3 font-mon">
                            <span className="font-semibold">Words</span> Number:
                        </Typography>
                        <div className="font-mon">
                            <input type="number" className='py-1 text-center border rounded-lg outline-none w-14 border-blue-gray-200' min={3} id="words" required/>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Typography variant="paragraph" className="w-2/3 font-mon">
                            Tool <span className="font-semibold">Accuracy</span>:
                        </Typography>
                        <div className="flex items-center font-mon">
                            <input type='range' className='w-40' min={0} max={40} id="accuracy" required />
                        </div>
                    </div>
                    <div className='flex w-full mt-4 justify-evenly'>
                        <Button color="gray" size="md" className="px-4 py-3 font-mon" onClick={Cancel}>
                            Cancel
                        </Button>
                        <Button color="light-blue" size="md" className="px-4 py-3 font-mon" type='sumbit' >
                            Upload
                        </Button>
                    </div>
                </form>

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
