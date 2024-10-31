
    const form = document.getElementById('contactForm');
    addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const query = document.getElementById('query').value;
        const heardFrom = document.getElementById('heardFrom').value;
        const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
      
        alert(`
            Nombre: ${name}
            Email: ${email}
            Telefono: ${phone}
            Query: ${query}
            Como nos conociste: ${heardFrom}
            Contacto: ${contactMethod.value}
        `);
        form.reset();
    })
    
 