document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';

    setTimeout(function() {
        mensagem.classList.add('fade-out');
    }, 3000);

    setTimeout(function() {
        mensagem.style.display = 'none';
        mensagem.classList.remove('fade-out');
    }, 5000); 
});
