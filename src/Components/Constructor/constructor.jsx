import React, {useState} from "react";
import House from "../House/house";
import Floor from "../Floor/floor";
import styles from "./constructor.module.css"
import HouseOptions from "../houseOptions/houseOptions";

const Constructor = () => {

    const [houses, setHouses] = useState([
        {id: 0, title: 'house 0', floors: 1, color: 'yellow'},
    ])

    const onChangeFloor = (name, ident) => {
        houses[ident].floors = name
        setHouses([...houses])
    }

    const onChangeColor = (name, ident) => {
        houses[ident].color = name
        setHouses([...houses])
    }

    function addHouse(event) {
        const lastElement = houses.length
        const randomNumber =  Math.floor(Math.random() * 100)
        setHouses([...houses,
            {id: lastElement, title: 'house' + ' ' + String(lastElement), floors: 1, color: 'yellow'}])
    }

    function deleteHouse(ident) {
        const arr = houses.filter((item) => item.id !== ident);
        setHouses(arr);
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.h1}>House constructor</h1>

                {houses && houses.map(function (house) {
                    return <HouseOptions
                        title={house.title}
                        onChangeFloor={onChangeFloor}
                        onChangeColor={onChangeColor}
                        ident={house.id}
                        key={house.id}
                        deleteHouse={deleteHouse}/>
                })}

                <button className={styles.button} onClick={function (event) {
                    addHouse(event)
                }}>Build a new house
                </button>
            </div>
            <div className={styles.city}>
                {
                    houses.map(function (house) {
                        const numOfFloors = house.floors;
                        const floors = [];
                        for (let i = 1; i < numOfFloors; i++) {
                            floors.push(<Floor color={house.color} key={house.id}/>);
                        }
                        return (
                            <House color={house.color} key={house.id}>
                                {floors}
                            </House>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Constructor;