import React from "react";
import "./SearchBlock.scss";
import { useState } from "react";
import LessonList from "./LessonList";
import InputBlock from "./InputBlock";


function SearchBlock() {
	const [SEARCH_KEYWORD, setSEARCH] = useState("");
	const [lessonsList, setLessonsList] = useState([]);
	const [error, setError] = useState<boolean>(false)
	const [empty, setEmpty] = useState<boolean>(false)
	const lessonFinder = (
		e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		fetch(`https://react-course-api.azurewebsites.net/lesson/${SEARCH_KEYWORD}`)
			.then((x) => { if (x.ok) { setError(false); return x.json() } if (!x.ok) { setError(true); return x.json() } })
			.then((x) => { if (x.length === 0) { setEmpty(true); setLessonsList(x) } else { setLessonsList(x); setError(false); setEmpty(false) } })
			.catch((error) => console.log(error));
	};

	return (

		<div className="search_container">
			<InputBlock lessonFinder={lessonFinder} setSEARCH={setSEARCH} />
			{empty && !error ? <div className="error">Please, write correct word</div> : null}
			{error ? <div className="error" >Something went wrong, click button "Search" again</div> : <LessonList lessonsList={lessonsList} />}
		</div>
	);
}
export default SearchBlock;
