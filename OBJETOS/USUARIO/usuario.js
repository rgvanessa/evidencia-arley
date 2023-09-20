let usuarios = [
    {email: 'juan@example.com', contraseña: '1234'},
    {email: 'maria@example.com', contraseña: '5678'},
    {email: 'pedro@example.com', contraseña: 'abcd'}
];

function login(email, contraseña) {
    let usuario = usuarios.find(u => u.email === email);
    if (usuario && usuario.contraseña === contraseña) {
        console.log('Bienvenido al sistema');
    } else {
        console.log('Contraseña incorrecta');
    }
}

login('juan@example.com', '1234'); // Bienvenido al sistema

