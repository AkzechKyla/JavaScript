export function Greeting() {
    return <h1>Shikanoko Nokonoko Koshitantan!</h1>
}

export function TestFunction() {
    const content = "I don't know what to put here";
    return (
        <>
            <h1>{content}</h1>
            <svg>
            <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
            <input type="text"/>
            </form>
        </>
    )
}

export function ShikanokoClub() {
    const members = ["Koshi Torako", "Shikanoko Noko", "Meme Bashame", "Koshi Anko"];
    const membersList = members.map((member) => <li key={member}>{member}</li>)

    return (
        <div>
            <h1>Deer Club Memebers</h1>
            <ol>
                {membersList}
            </ol>
        </div>
    );
}
