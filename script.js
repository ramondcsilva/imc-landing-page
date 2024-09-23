function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function calcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Baixo Peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            categoria = 'Peso Normal';
        } else if (imc >= 25 && imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
        }

        document.getElementById('resultado').innerHTML = 
            `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
    } else {
        document.getElementById('resultado').innerHTML = 
            'Por favor, insira valores válidos.';
    }
}

window.onscroll = function() {
    const topBtn = document.getElementById('topBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}