import React, { ReactElement } from 'react'

export default function Heading(): ReactElement {
    return (
        <section className="heading">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-center">
                        <h2>Digiwallet Agency</h2>
                        <h4>- TELL A BIGGER STORY -</h4>
                        <p>We are a fully in-house digital agency focusing on branding, marketing, web design and development with clients ranging from start-ups, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.</p>
                    </div>
                </div>
                <div className="grid grid-3 my-5">
                    <div className="">
                        <i className="fas fa-2x fa-pencil-ruler "></i>
                        <h4>Brand Design</h4>
                        <p>Designing a good website that accommodates a lot of content is a tricky balancing act to pull off.</p>
                    </div>
                    <div className="">
                        <i className="fas fa-2x fa-rocket"></i>
                        <h4>APP DEVELOPMENT</h4>
                        <p>We build mobile apps for the conference, integrating unique content and branding to create.</p>
                    </div>
                    <div className="">
                        <i className="fas fa-2x fa-palette"></i>
                        <h4>DIGITAL MARKETING</h4>
                        <p>Google has made this important since 1998 when it launched. Content became, and still is king since websites.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
