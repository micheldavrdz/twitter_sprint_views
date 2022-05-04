const UserService = require('./../services/UserService')

class UserView {

    static createUser(payload) {

        if(payload === null){
            return {error: 'El payload no existe.'}
          } 
          else if (typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
            return UserService.create(payload.id, payload.username, payload.name)
          } 
          else {
            return {error: 'Error, las propiedades del payload necesitan tener un valor válido'}
          }

        // Maybe this works too?

        // if (payload === null) {
        //     return {error: 'El payload no existe.'}
        // }
        // else if (!Object.values(payload).some(value => value === null) || !Object.values(payload).some(value => value === undefined) || !Object.values(payload).some(value => value === '')) {
        //     return {error: 'Error, las propiedades del payload necesitan tener un valor válido'}
        // }
        // else {
        //     return UserService.create(payload.id, payload.username, payload.name)
        // }
    }
}

module.exports = UserView;