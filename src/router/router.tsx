import { createHashRouter } from "react-router-dom";
import MainBlock from "../MainBlock/MainBlock";
import SearchBlock from "../SearchBlock/SearchBlock";
import LessonPage from "../LessonPage/LessonPage";
import { fetchLesson } from "../fetchLesson/fetchLesson";
import MyError from "../error/error";

export const router = createHashRouter([
	{
		path: "/",
		element: <MainBlock />,
		errorElement: <MyError />,
		children: [
			{
				element: <SearchBlock />,
				index: true,
			},
			{
				element: <LessonPage />,
				path: "/lesson/:lessonID",
				loader: fetchLesson
			}
		],
	},
]);
