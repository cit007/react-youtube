import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  function onChange(e) {
    setTerm(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    history.push(`search?query=${term}`);
  }
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faYoutube} />
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
        </form>
      </div>
    </div>
  );
};

export default Header;
