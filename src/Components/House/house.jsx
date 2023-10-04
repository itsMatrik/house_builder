import React from "react";
import styles from "./House.module.css";
import FirstFloor from "../firstFloor/firstFloor";
import Roof from "../Roof/roof";

const House = ( {color, children} ) => {

    return (
        <div className={styles.main}>
            <FirstFloor color={color}/>
            {children}
            <Roof/>
        </div>
    );
};

export default House;