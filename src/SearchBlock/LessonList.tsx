import "./SearchBlock.scss"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";

type Name = { name: string }

function LessonList({ lessonsList }: any) {
    const [position, setPosition] = useState(0);

    const prev = () => {
        if (position >= -1472) { setPosition((prev) => prev - 184) }
    };

    const next = () => {
        if (position >= 0) { } else { setPosition((prev) => prev + 184) }
    };
    return (
        <div className="elem_list">
            {lessonsList.length > 4 ? (
                <button onClick={next} className="buttons">
                    Prev
                </button>
            ) : null}
            <div className="slider">
                <div className="slider_line" style={{ left: position + "px" }}>
                    {lessonsList?.map((el: Name, i: number) => (
                        <NavLink className="course_box" key={i} to={`/lesson/${el.name}`}><SearchCard i={i} name={el.name} /></NavLink>
                    ))}
                </div>
            </div>

            {lessonsList.length > 4 ? (
                <button onClick={prev} className="buttons">
                    Next
                </button>
            ) : null}
        </div>
    )
}
export default LessonList