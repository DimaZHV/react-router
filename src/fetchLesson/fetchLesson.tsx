
export const fetchLesson = ({ params }: any) => {
    return fetch(`https://react-course-api.azurewebsites.net/lesson/${params.lessonID}`)
        .then((x) => x.json())
}