<template>
    <div>
        <h1>Cadastrar Funcionario</h1>
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
        <select v-model="employer.movel">
            <option>Escolha</option>
            <option v-for="p in movel" :value="p" :key="p.id">
                {{p.name}}
            </option>
        </select>
        <br>
        <button @click="save()">Salvar</button>
    </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import env from "/env.json"

    const apiURL = env.apiURL

    const employer = reactive({
        name: "",
        age: "",
        movel: ""
    });

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

    const save = () => {
        axios.post(apiURL + "/employer/cadastrar", employer)
        .then((response) => {
            if(response.status === 200){
                employer.name = ""
                employer.age = ""
                employer.movel = ""
                alert("Dados Cadastrados com sucesso!")                
            }
        }).catch( (error) => {
            alert("Erro: " + error.response.status)
        } )
    }

    onMounted( () => {
        findAll()
    } )

</script>

<style lang="scss" scoped>

</style>