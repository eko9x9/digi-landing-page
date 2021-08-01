import React, { ReactElement } from 'react';
import Image from "next/image";
import Person1Img from "../assets/img/person/person-1.jpg";
import Person2Img from "../assets/img/person/person-2.png";
import Person3Img from "../assets/img/person/person-3.jpg";
import Person4Img from "../assets/img/person/person-4.jpg";

export default function OurTeam(): ReactElement {
    return (
        <section className="our-team mt-10">
            <div className="row">
                <div className="col-8">
                    <h2>Meet Our Team</h2>
                    <h4>- We Are Stronger -</h4>
                </div>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="card__side">
                        <div className="card__side-front">
                            <div className="img-container">
                                <Image src={Person1Img} alt="image" className="img" />
                            </div>
                        </div>
                        <div className="card__side-detail">
                            <div className="animated">
                                <h4>Alex Graham</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side">
                        <div className="card__side-front">
                            <div className="img-container">
                                <Image src={Person2Img} alt="image" className="img" />
                            </div>
                        </div>
                        <div className="card__side-detail">

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side">
                        <div className="card__side-front">
                            <div className="img-container">
                                <Image src={Person3Img} alt="image" className="img" />
                            </div>
                        </div>
                        <div className="card__side-detail">

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__side">
                        <div className="card__side-front">
                            <div className="img-container">
                                    <Image src={Person4Img} alt="image" className="img" />
                                </div>
                            </div>
                        <div className="card__side-detail">

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
