interface Card {
    i: number,
    name: string
}

function SearchCard({ i, name }: Card) {
    return (
        <div className="elem" key={i}><p>{name}</p></div>
    )
}

export default SearchCard