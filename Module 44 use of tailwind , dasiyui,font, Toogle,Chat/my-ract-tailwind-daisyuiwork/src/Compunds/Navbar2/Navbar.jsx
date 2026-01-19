import React, { useState } from 'react';
import Link from '../Link/Link';
import { IoIosMenu } from "react-icons/io";

const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" }
];


const Navbar2 = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = menuItems.map(item => <Link key={item.name} link={item}></Link>)

    const onclickHandler = () => {
        console.log("Menu clicked");
        setIsMenuOpen(!isMenuOpen);
    }

    return (

        <div>

            <div className='flex justify-between m-5'>

                <span className='flex items-center'>

                    <IoIosMenu className='md:hidden' size={25} onClick={onclickHandler} />
                    <h1>BPWZ</h1>
                    <div className='absolute top-12 bg-white p-5 rounded-md duration-100  md:hidden'>
                    {
                        isMenuOpen ?
                            links : ""
                    }
                </div>


                </span>
                





                <div className='md:flex gap-4 hidden'>
                    {
                        links
                    }
                </div>

                <button>Sign in</button>

            </div>


        </div>


    );
};

export default Navbar2;