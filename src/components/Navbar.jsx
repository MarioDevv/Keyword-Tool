import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    MenuHandler,
    MenuItem,
    Menu,
    MenuList,
    Button,
    Avatar,
} from "@material-tailwind/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoSignOut, GoGear } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import LoginDialog from "./Dialog";
import { FirebaseContext } from "../config/FirebaseContext";

const NavbarMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { auth } = React.useContext(FirebaseContext);
    const signOut = () => {
        auth.signOut();
        window.location.reload();
    }

    
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const profileMenuItems = [
        { label: "My Profile", icon: BsFillPersonFill },
        { label: "Edit Profile", icon: GoGear, },
        { label: "Sign Out", icon: GoSignOut, },
    ];

    function ProfileMenu() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const closeMenu = () => setIsMenuOpen(false);

        return (
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="md"
                            alt="candice wu"
                            className="border border-blue-500 p-0.5"
                            src={"https://robohash.org/" + auth.currentUser}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
                    {profileMenuItems.map(({ label, icon }, key) => {
                        const isLastItem = key === profileMenuItems.length - 1;
                        return (
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded ${isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                                    }`}
                            >
                                {React.createElement(icon, {
                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                    onClick={isLastItem ?  signOut : undefined}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        );
    }
    
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
                            Pixelizer
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
            <Link to="https://github.com/MarioDevv/Keyword-Tool" color="blue-gray" className="text-black text-md hover:text-blue-500 font-mon">
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
                    {auth.currentUser ? (
                        <ProfileMenu />
                    ) : (
                        <LoginDialog />
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
                {auth.currentUser ? null : (
                    <Button size="md" fullWidth className="mb-2">
                        Get Started
                    </Button>
                )}
            </Collapse>
        </Navbar>
    );
};


export default NavbarMenu;