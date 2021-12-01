import styles from "./CalendarCard.module.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export const CalendarCard = () => {

    const [value, onChange] = useState(new Date());

    return (
        <div className={`card my-3 text-center align-items-center mx-4 ${styles.shadowcard}`}>
            <h6 className="my-3">CALENDARIO</h6>
            <Calendar onChange={onChange} value={value} className="border-0"/>
        </div>
        
    )

}

export default CalendarCard