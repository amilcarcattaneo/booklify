import React, { useState } from "react";

import ColouredLine from "../../components/colouredline/index";

import styles from "../../styles/Home.module.css";
import panelstyles from "./Panel.module.css";

const Panel = () => {
  const [active, setActive] = useState("my-library");

  const onClick = (buttonName) => {
    setActive(buttonName);
  };

  return (
    <div className={styles.column}>
      <img
        className={styles.avatar}
        src="https://avatars1.githubusercontent.com/u/48734999?s=460&u=ae30a7e6c07b2f334ef6771cd9cccdc80b44e66c&v=4"
      />
      <h3>Amilcar Cattaneo</h3>
      <ColouredLine colour="#bebebe" />

      <div className={`${styles.column} ${panelstyles.header}`}>
        <a
          title="My Library"
          className={`${active === "my-library" ? panelstyles.active : ""}`}
          onClick={() => onClick("my-library")}
          href="#my-library"
        >
          My Library
        </a>
        <a
          title="My Loans"
          className={`${active === "my-loans" ? panelstyles.active : ""}`}
          onClick={() => onClick("my-loans")}
          href="#my-loans"
        >
          My Loans
        </a>
        <a
          title="Near By"
          className={`${active === "near-by" ? panelstyles.active : ""}`}
          onClick={() => onClick("near-by")}
          href="#near-by"
        >
          Near By
        </a>
      </div>
      <ColouredLine colour="#bebebe" />
      <div className={`${styles.column} ${panelstyles.header}`}>
        <a
          title="Settings"
          className={`${active === "settings" ? panelstyles.active : ""}`}
          onClick={() => onClick("settings")}
          href="#settings"
        >
          Settings
        </a>
        <a
          title="Help"
          className={`${active === "help" ? panelstyles.active : ""}`}
          onClick={() => onClick("help")}
          href="#help"
        >
          Help
        </a>
      </div>
    </div>
  );
};

export default Panel;
