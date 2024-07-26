import React from "react";

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '#',
    },
    {
        id: 2,
        title: 'Categories',
        link: '#',
    },
    {
        id: 3,
        title: 'Blog',
        link: '#',
    },
    {
        id: 4,
        title: 'About',
        link: '#',
    },
    {
        id: 5,
        title: 'Contact',
        link: '#',
    },
]

const Navbar = () => {
    return(
        <nav>
            {/* _ Logo section_ */}
            <div>
                <a href="#">
                        Playing / <span>Market</span>
                </a>
            </div>
            {/* _ Menu section _ */}
            <div>
                <ul>
                    {
                        NavbarMenu.map((item)=>(
                                <li key={item.id}>

                                </li>
                        ))
                    }
                </ul>
            </div>
            {/* _ Mobile Hamburger section _*/}
        </nav>
    );
};
export default Navbar;