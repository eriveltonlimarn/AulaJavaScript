// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in seções
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Carousel automático simples
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX, scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => { isDown = false; carousel.classList.remove('active'); });
carousel.addEventListener('mouseup', () => { isDown = false; carousel.classList.remove('active'); });
carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

// Formulário de contato
const form = document.getElementById('contactForm');
const formMsg = document.querySelector('.form-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    formMsg.textContent = "Enviando...";
    formMsg.style.color = "#FFD700"; // Cor amarela/dourada para espera

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                formMsg.textContent = "Mensagem enviada com sucesso! Verifique seu e-mail.";
                formMsg.style.color = "#4CAF50"; // Verde
                form.reset();
            } else {
                console.log(response);
                formMsg.textContent = json.message;
                formMsg.style.color = "#f44336"; // Vermelho
            }
        })
        .catch(error => {
            console.log(error);
            formMsg.textContent = "Algo deu errado. Tente novamente mais tarde.";
        });
});


// Cursor animado com partículas
/*const cursor = document.createElement('div');
cursor.style.width = '15px';
cursor.style.height = '15px';
cursor.style.borderRadius = '50%';
cursor.style.background = '#FFD700';
cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = 1000;
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.transition = 'transform 0.1s ease';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});*/

// Captura o elemento do Pac-Man
const pacman = document.querySelector('.pacman-cursor');
if (pacman && window.innerWidth > 768) {
    document.addEventListener('mousemove', e => {
        // Usando requestAnimationFrame para suavidade sem pesar a CPU
        requestAnimationFrame(() => {
            pacman.style.left = e.clientX + 'px';
            pacman.style.top = e.clientY + 'px';
        });
    });
}

// Lógica do Menu Hambúrguer - MOBILE
// Lógica do Menu Hambúrguer - CORRIGIDA
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que o clique "vaze" para outros elementos
        navMenu.classList.toggle('active');
        
        // Troca o ícone de 'barras' para 'X'
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Fecha o menu automaticamente ao clicar em um link (Home, Sobre, etc)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });
}



// #### Otimização do Tawk.to - À Direita e Acima ####
window.addEventListener('load', function() {
    setTimeout(function() {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        // Configuramos para a direita ('br') com um recuo vertical maior
        window.Tawk_API.customStyle = {
            visibility : {
                desktop : { position : 'br', xOffset : 20, yOffset : 95 }, 
                mobile : { position : 'br', xOffset : 15, yOffset : 85 }
            }
        };

        (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69d114cb44898b1c3538e0f6/1jlcbifen';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
        })();
    }, 3000);
});
