const user = {
    name: 'Arimário',
    lastName: 'Jesus'
};

function getUserWithFullName(user) {
    return {
        ...user, // spread operator - ele retorna cada propriedade contida -> user.name, user.lastName
        fullName: `${user.name} ${user.lastName}` // string literals
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);