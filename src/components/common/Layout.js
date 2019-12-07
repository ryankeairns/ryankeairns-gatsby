import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null

    return (
    <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">

            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                {/* <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}> */}
                <header className="site-head">
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    {site.logo ?
                                        <img className="site-logo" src={site.logo} alt={site.title} />
                                        : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                    }
                                </Link>
                                <h1 className="screenreader-only">{site.title}</h1>
                                <p className="screenreader-only">{site.description}</p>
                            </div>
                            <div className="site-mast-right">
                                <nav className="site-nav">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer">Twitter</a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer">RSS</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    
                </div>
                { isHome ?
                    <div className="site-banner">
                        <div className="container">
                            <h2 className="site-banner-title">Ryan Keairns</h2>
                            <h3 className="site-banner-subtitle">The World's Oldest Product Designer&trade;</h3>
                            <div className="site-banner-desc">
                                <p>I design and build stuff for people to stare at, or listen to, in their web browser. If things go well, they'll navigate around and get their job done without uttering the phrase "Who designed this!?"</p>
                                <p><Link to="/about">Learn more boring stuff about me &rarr;</Link></p>
                            </div>
                        </div>
                    </div> :	
                    null}
                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">{site.title}</Link> © 2019 &mdash; Published with <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost</a>
                        </div>
                        <div className="site-foot-nav-right">
                            <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            { site.twitter && <a href={ twitterUrl } className="site-foot-nav-item" target="_blank" rel="noopener noreferrer">Twitter</a>}
                            <a className="site-foot-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer">RSS</a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>

    </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "rk-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
