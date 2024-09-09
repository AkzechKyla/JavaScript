//             const xhr = new XMLHttpRequest();
//
//             xhr.addEventListener('load', () => {
//                 console.log(xhr.response);
//             });
//
//             xhr.open('GET', 'https://supersimplebackend.dev/greeting');
//             xhr.send();

async function greetingFetch() {
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const greeting = await response.text();
    console.log(greeting);
}

greetingFetch();

async function greetingPOST() {
    const response = await fetch('https://supersimplebackend.dev/greeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Callie'
        })
    });

    const greeting = await response.text();
    console.log(greeting);
}

greetingPOST();

async function amazonFetch() {
    const response = await fetch('https://amazon.com');
    const amazon = await response.text();
    console.log(greeting);
}

amazonFetch(); // will cause CORS (Cross-Origin Resource Sharing) error
