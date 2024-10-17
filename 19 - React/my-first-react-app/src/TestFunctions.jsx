import { sculptureList } from './sculpture.js';
import { useState } from 'react';

function Panel({ title, children, isActive}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export function Accordion() {
    return (
        <>
        <h2>Almaty, Kazakhstan</h2>
        <Panel title="About" isActive={false}>
            With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel title="Etymology" isActive={false}>
            The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>
        </>
    );
}


export function Form() {
    // let firstName = 'Kyla';
    let [firstName, setFirstName] = useState('');
    // let lastName = 'Morcillos';
    let [lastName, setLastName] = useState('')

    function handleFirstName(e) {
        setFirstName(e.target.value)
        // firstName = e.target.value;
    }

    function handleLastName(e) {
        setLastName(e.target.value);
        // lastName = e.target.value;
    }

    function handleReset() {
        firstName = '';
        lastName = '';
    }

    return(
        <form>
            <input
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={handleFirstName}
            />
            <input
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={handleLastName}
            />
            <h1>Hi, {firstName} {lastName}!</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}

export function Gallery() {
    // let index = 0;
    const [index, setIndex] = useState(0); // index - state variable; setIndex - setter function
    // let showMore = false;
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;

    function handlePrevClick() {
        if (hasPrev) {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (hasNext) {
            // index = index + 1;
            setIndex(index + 1);
        }
    }

    function handleMoreClick() {
        // showMore = !showMore
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return(
        <>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <Panel title={sculpture.name}><img src={sculpture.url} alt={sculpture.alt}></img></Panel>
            {/* <img src={sculpture.url} alt={sculpture.alt}></img> */}
            <h3>({index + 1} of {sculptureList.length})</h3>
            {/* <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button> */}
            {/* {showMore === true ? <p>{sculpture.description}</p> : null} */}
            {/* {showMore && <p>{sculpture.description}</p>} */}
            <Panel title={sculpture.name}><p>{sculpture.description}</p></Panel>
            <button onClick={handlePrevClick} disabled={!hasPrev}>Prev</button>
            <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
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
