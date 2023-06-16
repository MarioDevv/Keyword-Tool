import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import { FirebaseContext } from "../config/FirebaseContext";

const LoginDialog = () => {
    const { signIn } = React.useContext(FirebaseContext);
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState(true);
    const handleOpen = () => setOpen((cur) => !cur);
    
    // Reset status when dialog is closed
    React.useEffect(() => {
        if (!open) {
            setStatus(true);
        }
    }, [open]);
    
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        signIn(data.get("email"), data.get("password"))
            .then(() => { 
                console.log("Sign-in successful.");
            })
            .catch((err) => {
                setStatus(false);
                console.log(err);
            });        
    };
    
    return (
        <>
            <Button size="md" className="hidden lg:inline-block" onClick={handleOpen}>
                Sign In
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="grid mb-4 h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Welcome &#128075;
                        </Typography>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardBody className="flex flex-col gap-4">
                            <Input type="email" label="Email" name="email" size="lg" required />
                            <Input type="password" label="Password" name="password" size="lg" required/>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button variant="gradient" type="submit" fullWidth color={status ? 'blue' : 'red'} className={status ? '' : 'animate-shake'}>
                                Sign In
                            </Button>
                            <Typography variant="small" className="flex justify-center mt-6">
                                Don&apos;t have an account?
                                <span className="ml-1 font-bold text-blue-500 cursor-pointer hover:underline">
                                    Sign up
                                </span>
                            </Typography>
                        </CardFooter>
                    </form>
                </Card>
            </Dialog>
        </>
    );
}

export default LoginDialog;