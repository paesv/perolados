import {ownersRef} from '../../firebaseApp'
import {perolasRef} from '../../firebaseApp'

export default {
    createOwner(owner) {
        ownersRef.child(owner.name).set(owner).then(response => {
            console.log(response)
        })
    },

    createPerola(perola) {
        return perolasRef.push(perola).then((snap) => {
            
        }).catch((error) => {

        })
    }
}