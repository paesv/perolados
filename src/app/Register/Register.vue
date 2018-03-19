<template>
    <div id="register-container">
        <h4>Registrar Nova Pérola</h4>
        <hr>

        <div class="form-group">
            <label for="">Pérola</label>
            <textarea class="form-control" v-model="perola.text"/>
        </div>

        <div class="form-group">
            <label for="">Dono da Pérola</label>
            <br/><button class="btn btn-sm btn-success mb-4">Cadastrar novo dono</button>
            <select class="form-control" v-model="perola.owner">
                <option selected="selected" value="shinoda">Shinoda</option>
            </select>
        </div>

        <button class="btn btn-primary btn-block" @click="createPerola">
             Cadastrar Pérola
        </button>


         <router-link to="/" class="btn btn-secondary btn-block">
            Voltar
        </router-link>
    </div>
</template>

<script>
import registerService from './RegisterService'
import swal from 'sweetalert2'

export default {
    data() {
        return {
            perola: {
                text: '',
                owner: '',
                cretedBy: this.$store.state.user.uid,
                createdAt: Date.now()
            }
        }
    },

    methods: {
        createPerola() {
            if(this.perola.text != '' && this.perola.owner != '') {
                if(registerService.createPerola(this.perola)) {
                    swal({
                        title: "Perola Adicionada",
                        type: "success"
                    })
                }
            } else {
                swal({
                    title: "Preencha todos os campos",
                    type: "error"
                })
            }
        },

        getOwners() {

        }
    }
    
}
</script>
