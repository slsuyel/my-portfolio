// script.js

function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        desc: document.getElementById('desc').value,
        image: document.getElementById('image').value,
        category: document.getElementById('category').value,
        links: {
            view: document.getElementById('viewLink').value,
            code: document.getElementById('codeLink').value,
        }
    };

    console.log(formData)

    fetch('https://backend-theta-jet.vercel.app/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data uploaded successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
