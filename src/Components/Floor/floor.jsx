import React from "react";
import styles from "./floor.module.css";
import styled from "styled-components";

const Floor = ({ color }) => {

    const FloorColor = styled.div`
      background-color: ${props => props.color};
    `

    return (
        <FloorColor className={styles.main} color={color}>
            <div className={`${styles.window} ${styles.left}`}/>
            <div className={`${styles.window} ${styles.right}`}/>
        </FloorColor>
    );
};

export default Floor;