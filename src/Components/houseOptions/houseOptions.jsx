import React, {useState} from "react";
import styles from "./houseOptions.module.css";

export const HouseOptions = ({title, onChangeFloor, onChangeColor, ident, deleteHouse}) => {

    const [selects, setSelects] = useState(0);

    const handleFloorChange = (event) => {
        onChangeFloor(event.target.value, ident)
        setSelects(event.target.value)
    }

    const colorChange = (event) => {
        onChangeColor(event.target.value, ident)
    }

    const deleteFunc = (event) => {
        deleteHouse(ident)
    }

    return (
        <div className={styles.main}>
            <div className={styles.h1}>{title}</div>
            <button className={styles.button} onClick={deleteFunc}>delete</button>
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <div className={styles.text}>Floors:</div>
                    <input className={styles.input} onChange={handleFloorChange}/>
                </div>
                <div className={styles.flexContainer}>
                    <div className={styles.text}>Color</div>
                    <select name="choice" onChange={colorChange}>
                        <option value="yellow">yellow</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="white">white</option>
                    </select>
                </div>
            </div>
            <input type={"range"} min={1} max={10} className={styles.slider} value={selects}/>
        </div>
    );
};

export default HouseOptions;