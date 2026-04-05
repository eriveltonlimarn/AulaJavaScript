// Cria uma nova timeline de animações com GSAP
var timeline = gsap.timeline()

// Animação dos elementos h3 dentro de #nav
timeline.from("#nav h3",{ 
    y: -50,        // Começa 50px acima da posição original
    opacity: 0,    // Começa invisível
    delay: 0.4,    // Espera 0.4s antes de iniciar
    duration: 0.8, // Duração da animação = 0.8s
    stagger: 0.3   // Cada h3 começa a animação 0.3s depois do anterior
}) 

// Animação dos títulos h1 dentro de #main
timeline.from('#main h1',{
    x: -500,       // Começa 500px à esquerda da posição original
    opacity: 0,    // Começa invisível
    duration: 0.8, // Duração da animação = 0.8s
    stagger: 0.4   // Cada h1 inicia 0.4s depois do anterior
})

// Animação das imagens
timeline.from('img',{
    x: 100,        // Começa 100px à direita da posição original
    rotate: 45,    // Começa rotacionada 45 graus
    opacity: 0,    // Começa invisível
    duration: 0.5, // Duração da animação = 0.5s
    stagger: 0.5   // Cada imagem inicia 0.5s depois da anterior
})

// Captura o movimento do mouse
document.addEventListener('mousemove', function(e){
    createStar(e.clientX, e.clientY);
});

function createStar(x, y){
    // Cria um elemento div para a estrela
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);

    // Posiciona a estrela na posição do mouse
    star.style.left = x + 'px';
    star.style.top = y + 'px';

    // Anima a estrela: ela vai crescer, girar e sumir
    gsap.to(star, {
        x: Math.random() * 100 - 50,  // movimento horizontal aleatório
        y: Math.random() * 100 - 50,  // movimento vertical aleatório
        scale: 0,                      // encolhe até sumir
        opacity: 0,                     // desaparece
        rotation: Math.random() * 360, // gira aleatoriamente
        duration: 1,                    // duração da animação
        ease: "power2.out",
        onComplete: () => star.remove() // remove do DOM depois da animação
    });
}