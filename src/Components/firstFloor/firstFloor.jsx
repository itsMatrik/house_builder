import React from "react";
import styles from "./firstFloor.module.css";
import styled from "styled-components";

const FirstFloor = ({color}) => {

    const FloorColor = styled.div`
      background-color: ${props => props.color};
    `

    return (
        <FloorColor className={styles.main} color={color}>
            <div className={styles.window}/>
            <div className={styles.door}/>
        </FloorColor>
    );
};

export default FirstFloor;