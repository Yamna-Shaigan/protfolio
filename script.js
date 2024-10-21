


JavaScript (script.js)


// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea').value;
    console.log({ name, email, message });
    // Send data to server or API
});

