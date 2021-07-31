import React, { ReactElement } from 'react';
import Image from "next/image";
import Slider from './Swiper';

export default function Home(): ReactElement {

    return (
        <section className="home">
            <Slider/>   
        </section>
    )
}
