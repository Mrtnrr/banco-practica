let users = [
    {
        idUser: 1,
        fullName: 'Martin Romero',
        money: 11000,
        target: 9811,
        nip: 1234,
    },
    {
        idUser: 2,
        fullName: 'Marcos',
        money: 2430,
        target: 4455,
        nip: 1234,
    },
    {
        idUser: 3,
        fullName: 'José Miguel',
        money: 16700,
        target: 5521,
        nip: 1234,
    }
];



localStorage.setItem('users', JSON.stringify(users));
let loginn;
function actualizaCuentas(cuentas){
    return localStorage.setItem('users', JSON.stringify(cuentas));
}
function cuentas(){
    return JSON.parse(localStorage.getItem('users'))
}
 class Bank {
    
    constructor(target, nip ){
        this.target = target;
        this.nip = nip;
    }

    login(nip, target) {	
        if(!nip || !target){
            return 'Nip y Numero de targeta requerida'
        }
        if(typeof nip === 'number' && typeof target === 'number'){
            let users = cuentas();
            let res = users.filter( (user) => user.target === target && user.nip === nip);
            if(res.length == 1){
                let tex = `Bienvenido ${res[0].fullName}`
                return document.getElementById('login').innerHTML = tex;
            }
        }
    }
}
class User extends Bank {
      constructor(idUser, fullName,money, target, nip){
        super(target, nip)
        this.idUser = idUser;
        this.fullName = fullName;
        this.money = money;
    }

    consultarSaldo(idUser){
        if(!idUser) return 'El id del usuario es requerido'
        else{
            let user = cuentas().filter((u) => u.idUser === idUser)
            let tex = `Tu saldo actual es de ${user[0].money}`
            return document.getElementById('misaldo').innerHTML = tex;
        }
    }
    retirar(retiro, idUser){
       if(!retiro || !idUser) return 'Agrega el monto a retirar';
       if(typeof retiro === 'number' && typeof idUser === 'number'){

         let users = cuentas()
         let update = users.map((user) => {
             if(user.idUser === idUser && user.money >= retiro){
                     let res = user.money -= retiro
                     user.money = res
             }
             return user;
         })
         let misaldo = update.filter((user) => user.idUser === idUser)
         actualizaCuentas(update)

        let tex = `${misaldo[0].fullName} tu retiro fue exitoso. Saldo:${misaldo[0].money}`
        return document.getElementById('retiro').innerHTML = tex;

       }
    }
    depositar(cantidad, idUser) {
       if(!cantidad || !idUser) return 'Agrega el monto a abonar';
       if(typeof cantidad === 'number' && typeof idUser === 'number'){

         let users = cuentas()
         let update = users.map((user) => {
             if(user.idUser === idUser){
                     let res = user.money += cantidad
                     user.money = res
             }
             return user;
         })
         let misaldo = update.filter((user) => user.idUser === idUser)
         actualizaCuentas(update)
         let tex =  `${misaldo[0].fullName} tu abono fue exitoso. Saldo:${misaldo[0].money}`
         return document.getElementById('deposito').innerHTML = tex;

       }
    }
}

let us = new User();
let login = us.login;
let consultarSaldo = us.consultarSaldo;
let retirar = us.retirar;
let depositar = us.depositar;

/** 
 * Agrega esto dentro del html donde deseas que se muestre la información
 *  <div id="login"></div>
    <div id="misaldo"></div>
    <div id="retiro"></div>
    <div id="deposito"></div>
 * cada uno regresa el resultado de una function entonces ocupa las que consideres
*/
// const user = new User(4,'Rosa Mendez',2000,0909,123)
// console.log('usuario 4', user.consultarSaldo(4));
