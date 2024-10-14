import { sculptureList } from './sculpture.js';
import { useState } from 'react';

export function Gallery() {
    // let index = 0;
    const [index, setIndex] = useState(0); // index - state variable; setIndex - setter function

    function handleClick() {
        // index = index + 1;
        setIndex(index + 1);
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <img src={sculpture.url} alt={sculpture.alt}></img>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <img></img>
            <p>{sculpture.description}</p>
            <button onClick={handleClick}>Next</button>

        </>
    );
}

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
                // return member.startsWith('K') ? <ListItem key={member} member={member}/> : null;
                // return member.startsWith('K') && <ListItem key={member} member={member}/>;
            })}
        </ol>
    );
}

function ListItem(props) {
    return (
        <li>{props.member}</li>
    );
}

export function Button({text = "Default", color="white", fontSize="24", handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>{text}</button>
    );
}
