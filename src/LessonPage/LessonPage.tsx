import "./LessonPage.scss";
import { useLoaderData } from "react-router-dom";

export interface Card {
	name?: string,
	title?: string,
	type?: string,
	youtube?: string,
	shortSummary?: string,
	keyPoints?: [],
	links?: [],
	hometask?: []
}

function LessonPage() {
	const lesson: Card[] = useLoaderData() as Card[];
	const lessonCard = lesson[0]

	return (
		<div className="lesson_card">
			<h1>{lessonCard.title}</h1>
			<h2>{lessonCard.type}</h2>
			<div className="main_container">
				{lessonCard.youtube ? (
					<a href={lessonCard.youtube}>YouTube Lesson</a>
				) : null}
				{lessonCard.links ? (
					<div>
						<h3>You can find important info here:</h3>
						<ul>
							{lessonCard.links?.map((el, index) => (
								<li key={index}>
									<span>
										{el[0]}: {<a href={el[1]}>{el[1]}</a>}
									</span>
								</li>
							))}
						</ul>
					</div>
				) : null}
				{lessonCard.hometask ? (
					<div>
						<h3>Don't forget about your hometask:</h3>
						<ul>
							{lessonCard.hometask.map((el, index) => (
								<li key={index}>{el}</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</div>
	);
}
export default LessonPage;
