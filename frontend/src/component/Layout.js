import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({children, nav}) {
    return (
        <div>
            {nav ? <Nav/> : null}

            {children}
            <Footer />
        </div>
    )
}

export default Layout
