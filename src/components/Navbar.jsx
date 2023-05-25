import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    MenuHandler,
    MenuItem,
    Menu,
    MenuList,
    Button
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavbarMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const location = useLocation();

    // Comprueba si la ruta actual es diferente de "/"
    const hideButton = location.pathname !== '/';

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const Dropdown = () => {
        return (
            <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 }, }}>
                <MenuHandler>
                    <Typography as="li" color="blue-gray" className='flex items-center text-black cursor-pointer text-md hover:text-blue-500 font-mon'>
                        Tools
                        <RiArrowDropDownLine size={18} color="black" />
                    </Typography>
                </MenuHandler>
                <MenuList>
                    <Link to="/pixelator" className="outline-none">
                        <MenuItem>
                            Pixelator
                        </MenuItem>
                    </Link>
                    <MenuItem>
                        Upcoming...
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

    const navList = (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            {Dropdown()}

            <Link color="blue-gray" className="text-black text-md hover:text-blue-500 font-mon">
                Contact
            </Link>
            <Link color="blue-gray" className="text-black text-md hover:text-blue-500 font-mon">
                Docs
            </Link>
        </ul>
    );

    return (
        <Navbar className="sticky inset-0 z-10 max-w-full px-4 py-5 rounded-none h-max lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to="/">
                    <Typography className="mr-4 cursor-pointer py-1.5 font-semibold text-xl font-mon">
                        Keyword Research Tool
                    </Typography>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="hidden mr-4 lg:block">{navList}</div>
                    {!hideButton && (
                        <Link to="/browser">
                            <Button size="md" className="hidden lg:inline-block">
                                Get Started
                            </Button>
                        </Link>
                    )}
                    <IconButton
                        variant="text"
                        className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                {!hideButton && (
                    <Button size="md" fullWidth className="mb-2">
                        Get Started
                    </Button>
                )}
            </Collapse>
        </Navbar>
    );
};


export default NavbarMenu;