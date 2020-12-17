import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaYoutube } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  function onChange(e) {
    setTerm(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("search history", history);
    history.push(`search?query=${term}`);
  }
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logo}>
          <FaYoutube />
          <Link to="/">Youtube</Link>
        </div>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
          ></input>
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
