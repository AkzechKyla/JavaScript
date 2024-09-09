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

// greetingFetch();

async function greetingPOST() {
    try {
        const response = await fetch('https://supersimplebackend.dev/greeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: ''
        });

        if (response.status >= 400) throw response;

        const greeting = await response.text();
        console.log(greeting);
    } catch(error) {
        if (error.status === 400) {
            console.log(await error.json());
        } else {
            console.log('Network error. Please try again later.');
        }
    }
}

greetingPOST();

async function amazonFetch() {
    const response = await fetch('https://amazon.com');
    const amazon = await response.text();
    console.log(greeting);
}

// amazonFetch(); // will cause CORS (Cross-Origin Resource Sharing) error
