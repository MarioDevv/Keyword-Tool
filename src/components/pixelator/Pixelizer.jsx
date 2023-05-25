import React from "react"
import { Button, Textarea, Typography, Spinner } from "@material-tailwind/react"

const Pixelizer = ({ onHandleCopy }) => {

    const Pixelize = (e) => {
        e.preventDefault();
        const links = document.getElementById("links").value.split("\n");
        const output = document.getElementById("output");
        output.innerHTML = "";
        // Crear un elemento de prueba para calcular el ancho
        const testElement = document.createElement("span");
        testElement.style.fontFamily = "Product Sans"; // Establecer la fuente deseada
        testElement.style.fontSize = "20px"; // Ajustar el tamaño de fuente según tus necesidades
        testElement.style.visibility = "hidden"; // Ocultar el elemento de prueba
        links.forEach((link) => {
            testElement.innerText = link;
            // Agregar el elemento de prueba al DOM antes de obtener su ancho
            document.body.appendChild(testElement);
            // Obtener el ancho del elemento de prueba
            const width = testElement.offsetWidth;
            // Eliminar el elemento de prueba del DOM
            document.body.removeChild(testElement);
            // Mostrar el ancho en el elemento output
            output.innerHTML += `<p>${width}px</p>`;
        });
    }

    const copyText = () => {
        // Find the div element by its ID
        const outputDiv = document.getElementById("output");
        // Create a range object and select the text content of the div
        const range = document.createRange();
        range.selectNode(outputDiv);
        // Add the range to the user's selection
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        // Copy the selected text to the clipboard
        document.execCommand("copy");
        // Clean up the selection
        selection.removeAllRanges();
        onHandleCopy()
    }

    return (
        <div className="flex items-center justify-center w-full h-2/3">
            <div className="flex w-2/3 p-5 mt-20 border-2 rounded-lg h-96 border-blue-gray-100 justify-evenly">
                <form className="flex flex-col justify-center w-2/5">
                    <Typography color="blue-gray" variant="h4" className="font-mon">
                        Quick Start
                    </Typography>
                    <Typography color="blue-gray" variant="small" className=" font-mon">
                        Select all the links you want to analyze
                    </Typography>
                    <Typography color="blue-gray" variant="small" className=" font-mon">
                        Click in &quot;Pixelize&quot;
                    </Typography>
                    <div className="mt-4">
                        <Textarea label="Paste your links here" className="h-44" id="links" />
                    </div>
                    <div className="mt-2">
                        <Button type="submit" size="md" fullWidth onClick={Pixelize}>
                            Pixelize
                        </Button>
                    </div>
                </form>
                <div className="h-full border-2"></div>
                <div className="relative flex flex-col justify-center w-2/5">
                    <div className="h-64 p-3 overflow-y-auto border rounded-lg border-blue-gray-200" id="output"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute w-5 h-5 right-2 top-12 hover:animate-bounce" onClick={copyText}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Pixelizer