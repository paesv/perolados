<template>
    <div id="main-container" class="text-center">
        <h4>Perolados</h4>
        <p>Voce seria capaz de acertar quem fez essa perola?</p>
        <hr>

        <button class="btn btn-primary" @click="loginWithGoogle">
            Fazer Login com o Google
        </button>
    </div>
</template>

<script>
import firebase from "firebase"
import {firebaseApp} from '../../firebaseApp'

export default {
    methods: {
        loginWithGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithPopup(provider).then((result) => {
                var token = result.credential.accessToken
                var user = result.user
            }).catch((error) => {
                console.log(error)
            })
        }
    },

    mounted() {
        if(this.$store.state.user) {
            this.$router.replace('/dashboard')
        }
    }
}
</script>
