window.addEventListener("DOMContentLoaded", () => {
    const seta = document.querySelector(".seta");

    seta.style.position = "fixed";
    seta.style.bottom = "30px";
    seta.style.right = "40px";
    seta.style.zIndex = "9999";
    seta.style.opacity = "0";
    seta.style.transform = "translateY(20px) rotate(0deg)";

    setTimeout(() => {
        seta.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        seta.style.opacity = "1";
        seta.style.transform = "translateY(0) rotate(360deg)";
    }, 300);

    setInterval(() => {
        seta.style.transform = "translateY(-5px) rotate(360deg)";
        setTimeout(() => {
            seta.style.transform = "translateY(0) rotate(360deg)";
        }, 300);
    }, 2000);

    seta.addEventListener("click", (event) => {
        event.preventDefault(); 
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.querySelectorAll('.cabecalho_textos a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.color = '#fff';
        link.style.transition = 'transform 0.2s ease-in-out, color 0.2s ease-in-out';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
        link.style.color = '#c4a47c';
    });
});

document.querySelectorAll('.cabecalho_textos a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', function() {
    document.querySelectorAll('.banner, .faixas, .contatos').forEach(section => {
        let speed = 0.3;
        let offset = window.scrollY * speed;
        
        section.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    });
});