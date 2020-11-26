import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <div>
                <Link to ="/">Youtube</Link>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                </form>
            </div>
        </>
    )
}

export default Header
