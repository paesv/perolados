import {perolasRef} from '../../firebaseApp'

export default {
    getPerolas() {
        return new Promise((resolve, reject) => {
            perolasRef.on('value', (snapshot) => {
                resolve(snapshot)
            })
        })
    }   
}