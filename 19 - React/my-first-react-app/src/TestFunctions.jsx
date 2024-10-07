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

    return (
        <div>
            <h1>Deer Club Memebers</h1>
            <List members={members}/>
        </div>
    );
}

function List(props) {
    return (
        <ol>
            {props.members.map((member) => {
                return <ListItem key={member} member={member}/>
            })}
        </ol>
    );
}

function ListItem(props) {
    return (
        <li>{props.member}</li>
    );
}
