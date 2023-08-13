// Complete a função para que ela receba um objeto e utilize a desestruturação para extrair os valores e realizar uma ação.
function processUserData(user) {
    // Seu código aqui
    const { theme, notifications } = user.preferences
    const username = user.username
    const email = user.email

    console.log(`Usuário: ${username}, Tema: ${theme}, notificações:`, notifications === true ? "ativadas" : "desativadas")
}

const user = {
    username: 'jane_doe',
    email: 'jane@example.com',
    preferences: {
        theme: 'dark',
        notifications: true,
    },
};

processUserData(user); // Deve imprimir: "Usuário jane_doe, tema dark, notificações ativadas."
