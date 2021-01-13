import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-green-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex text-gray-200 max">
                    <NavLink exact to="/" activeClassName="underline" className="inline-flex items-center py-4 px-3 mr-6 font-bold text-4xl cursive tracking-widest hover:text-gray-50">Dejan</NavLink>
                    <NavLink to="/post" activeClassName="underline bg-green-800" className="inline-flex py-3 px-3 my-4 rounded items-center hover:text-gray-50">Blog Posts</NavLink>
                    <NavLink to="/project" activeClassName="underline bg-green-800" className="inline-flex py-3 px-3 my-4 rounded items-center hover:text-gray-50">Projects</NavLink>
                    <NavLink to="/about" activeClassName="underline bg-green-800" className="inline-flex py-3 px-3 my-4 rounded items-center hover:text-gray-50">About Me!</NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-4">
                    <SocialIcon url="https://www.linkedin.com/in/dejan-pantelic/" className="mr-4" target="_blank" fgColor="#fff" bgColor="#047857" style={{ height: 35, width: 35 }}></SocialIcon>
                    <SocialIcon url="https://github.com/Dejzon" className="mr-4" target="_blank" fgColor="#fff" bgColor="#047857" style={{ height: 35, width: 35 }}></SocialIcon>
                    <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" bgColor="#047857" style={{ height: 35, width: 35 }}></SocialIcon>
                </div>
            </div>
        </header>
    )
}
