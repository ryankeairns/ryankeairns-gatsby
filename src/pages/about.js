import React from 'react'

import { Layout } from '../components/common'

/**
* About page
*
* This file renders a single page and loads all the content.
*
*/
const AboutPage = () => {

    return (
        <>
            <Layout>
                <div className="container">
                    <article className="content">
                        <h1 className="content-title">I'm a designer and builder of web things, currently working at <a href="https://www.elastic.co/" target="_blank" rel="noopener noreferrer">Elastic</a>.</h1>

                        {/* The main page content */}
                        <section
                            className="content-body load-external-scripts"
                        >
                            <p>Through the sharing of others, I was fortunate to learn about HTML, CSS, and web standards, which ultimately saved me from a career in cubicles.
                            My hope for this blog is to pay it forward, through examples and experiences of my own, on those topics and more.</p>
                            <p>As a member of the product design team at Elastic, I work with others to build and maintain the growing, open source, <a href="https://elastic.github.io/eui/#/" target="_blank" rel="noopener noreferrer">EUI design system</a> while helping engineeering teams implement it in a wide range of scenarios.</p>
                            <p>Having worked in a distrubted (remote) role since 2012, I've survived the ups and downs and am always interested in chatting with others who are interested in giving it a try.</p>
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

export default AboutPage
