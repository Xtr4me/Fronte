<template>
    <div>
        <h1>Editar Movel</h1>
        <input type="text" name="name" id="name" v-model="movel.name">
        <button @click="update">Salvar</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import env from "/env.json"
import { useRoute } from "vue-router";
import axios from "axios";

const apiURL = env.apiURL

const route = useRoute()

const movel = ref({ id: null, name : "" })

const load = () => {
    let id = route.params.id
    axios.get(apiURL + "/movel/" + id)
    .then((response) => {
       movel.value.id = response.data.id;
       movel.value.name = response.data.name;
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

const update = () => {
    axios.put(apiURL + "/movel/edit", movel.value)
    .then((response) => {
        if(response.data != ""){
            alert("Dados atualizados com sucesso!")
            load()
        }
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

onMounted(() => {
    load();
})

</script>

<style lang="scss" scoped>

</style>