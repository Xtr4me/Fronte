<template>
    <div>
        <h1>Cadastrar Movel</h1>
        <label>Nome:</label>
        <input type="text" name="name" id="name" v-model="movel.name">
        <button @click="save()">Salvar</button>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import axios from "axios";
import env from "/env.json"


    const apiURL = env.apiURL

    const movel = reactive({
        name: ""
    })

    const save = () => {
        axios.post(apiURL + "/movel/cadastrar", movel)
        .then((response) => {
            if(response.status === 200){
                movel.name = ""
                alert("Dados Cadastrados com sucesso!")                
            }
        }).catch( (error) => {
            alert("Erro: " + error.response.status)
        } )
    }

</script>

<style lang="scss" scoped>

</style>