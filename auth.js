// Este código será executado assim que o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function() {

    // Tenta pegar os dados do usuário que fez login do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    // Encontra o link da "Área do Aluno" na navbar pelo ID que vamos adicionar
    const navLinkUser = document.getElementById('nav-link-user');
    
    // Se o navLinkUser não existir na página, interrompe o script para evitar erros
    if (!navLinkUser) {
        return;
    }

    if (usuarioLogado) {
        // --- USUÁRIO ESTÁ LOGADO ---

        // Muda o texto e o link do botão
        navLinkUser.textContent = `Olá, ${usuarioLogado.nome.split(' ')[0]}`; // Mostra só o primeiro nome
        navLinkUser.href = 'aluno.html'; // Garante que o link aponte para a área do aluno
        navLinkUser.classList.add('text-danger'); // Adiciona uma cor para destacar

        // Cria um botão "Sair"
        const logoutButton = document.createElement('a');
        logoutButton.textContent = 'Sair';
        logoutButton.href = '#'; // Link vazio porque ele só vai executar uma ação
        logoutButton.classList.add('nav-link', 'fw-bold'); // Usa as mesmas classes da navbar
        logoutButton.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável

        // Adiciona a função de logout ao botão
        logoutButton.onclick = function() {
            // Remove o usuário do localStorage
            localStorage.removeItem('usuarioLogado');
            // Redireciona para a página de login
            window.location.href = 'login.html';
        };

        // Adiciona o botão "Sair" na navbar, logo depois do link do usuário
        navLinkUser.parentElement.insertAdjacentElement('afterend', logoutButton);

    } else {
        // --- NINGUÉM ESTÁ LOGADO ---

        // Muda o texto e o link para direcionar ao login
        navLinkUser.textContent = 'Login / Cadastrar';
        navLinkUser.href = 'login.html';
    }
});