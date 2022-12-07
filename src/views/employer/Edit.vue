<template>
    <div>
        <h1>Editar Funcionario</h1>
        <br>
        <label>Nome do Funcionario:</label>
        <br>
        <input type="text" name="name" id="name" v-model="employer.name">
        <br>
        <label>Idade:</label>
        <br>
        <input type="text" name="age" id="age" v-model="employer.age">
        <br>
        <label>Cargo:</label>
        <br>
        <input type="text" name="cargo" id="cargi" v-model="employer.cargo">
        <label>Movel</label>
        <br>
        <select v-model="employer.movel">
            <option>Escolha o movel</option>
            <option v-for="p in movel" :value="p" :key="p.id">
                {{p.name}}
            </option>
        </select>
        <br>
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

const employer = ref({ id: null, name : "", age : "", movel : "" })

const load = () => {
    let id = route.params.id
    axios.get(apiURL + "/employer/" + id)
    .then((response) => {
        employer.value.id = response.data.id;
        employer.value.name = response.data.name;
        employer.value.age = response.data.age;
        employer.value.movel = response.data.movel;
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

const movel = ref([]);

    const findAll = () => {
        axios
        .get(apiURL + "/movel")
        .then((response) => {
            console.log("Response: " + JSON.stringify(response.data));
            movel.value = response.data;
        })
        .catch((error) => {
            alert("Error:" + error.response.data);
        });
    };

const update = () => {
    axios.put(apiURL + "/employer/edit", employer.value)
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
    findAll();
})

</script>

<style lang="scss" scoped>

</style>