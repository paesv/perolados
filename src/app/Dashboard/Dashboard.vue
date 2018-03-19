<template>
    <div id="dashboard-container">
        <div class="displayName">
            Olá, {{this.$store.state.user.displayName}}
        </div>

        <hr>

        <button class="btn btn-primary btn-block" @click="$router.push('/game')">
            Iniciar novo jogo
        </button>

        <button class="btn btn-secondary btn-block" @click="$router.push('/registrar')">
            Cadastrar Pérola
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
