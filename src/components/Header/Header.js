import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FaYoutube } from 'react-icons/fa';
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <div className={styles.logo}>
                    <FaYoutube />
                    <Link to ="/">Youtube</Link>
                </div>
                
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Search..." ></input>
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
        </div>
    )
}

export default Header
