import React from 'react'
import Header from "../Header/Header"

const Layout = ({children}) => {
    console.log(children);
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
