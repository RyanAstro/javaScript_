const getAdmins  = (map) => {
    let admins = [];

    for ([key, value] of map){
        if(value === 'Admin'){
            admins.push(Key);
        }
    }
    return admins;
};
const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('joao', 'Admin');
usuarios.set('ryan', 'User');
usuarios.set('maria', 'Admin');

console.log(getAdmins(usuarios));