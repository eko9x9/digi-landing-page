import React, { ReactElement, useEffect, useState } from 'react';
import Image from "next/image";
import LogoImg from "../assets/img/logo.png";
import LogoWhiteImg from "../assets/img/logo-white.png";

export default function Navbar(): ReactElement {

    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = (e: any) => {
        if(document.documentElement.scrollTop > 0){
            !isScrolled && setIsScrolled(true)
        }else{
            isScrolled && setIsScrolled(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={`navbar border-bottom ${isScrolled ? "bg-white-nav" : ""}`}>
            <div className="container flex">
                <div className="logo">
                    { isScrolled ?
                        <Image src={LogoWhiteImg} alt="logo" />
                        :
                        <Image src={LogoImg} alt="logo" />
                    }
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Shops</a></li>
                        <li><a href="">Elements</a></li>
                    </ul>
                </nav>
                <div className="attr-right border-left">
                    <ul className="item-right">
                        <li><a href=""><i className="fas fa-shopping-cart"></i></a></li>
                        <li><a href=""><i className="fas fa-search"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
