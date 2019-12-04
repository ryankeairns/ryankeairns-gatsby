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
                        <h1 className="content-title">About me</h1>

                        {/* The main page content */}
                        <section
                            className="content-body load-external-scripts"
                        >This is about me!</section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

export default AboutPage
