import "./SearchBlock.scss"

interface Props {
    lessonFinder: (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void,
    setSEARCH: (e: React.SetStateAction<string>) => void
}

function InputBlock({ lessonFinder, setSEARCH }: Props) {
    return (
        <div className="search-block">
            <form className="search_form" onSubmit={(e) => lessonFinder(e)} action="">
                <input
                    onChange={(e) => setSEARCH(e.currentTarget.value)}
                    type="text"
                    name=""
                    id="search"
                    placeholder="Write your word"
                />
                <button className="search_button" onSubmit={(e) => lessonFinder(e)}>Search</button>
            </form>
        </div>
    )
}
export default InputBlock