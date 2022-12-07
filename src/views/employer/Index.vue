<template>
  <div>
    <h1>Moveis Cadastradas</h1>
    <hr />
    <table border="1">
      <tr>
        <th>Nome Funcionario</th>
        <th>Idade</th>
        <th>Cargo</th>
        <th>Editar</th>
        <th>Excluir?</th>
      </tr>
      <tr v-for="p in employer">
        <td>{{ p.nome }}</td>
        <td>{{ p.age }}</td>
        <td>{{ p.breed.name }}</td>
        <td>
          <router-link :to="{ name: 'employer-edit', params: { id: a.id } }"
            >Editar</router-link
          >
        </td>
        <td><button @click="destroy(a.id)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import env from "/env.json";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const apiURL = env.apiURL;

const employer = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/employer")
    .then((response) => {
      employer.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.status);
    });
};

const destroy = (id) => {
  if (confirm("Deseja excluir o cadastro?")) {
    axios
      .delete(apiURL + "/employer/" + id)
      .then((response) => {
        if (response.status === 200 && response.data == "") {
          alert("Dados Excluídos com sucesso!");
          findAll();
        }
      })
      .catch((error) => {
        alert("Erro: " + error.response.status);
      });
  }
};

onMounted(() => {
  //console.log("URL: " + url)
  findAll();
  console.log("data: " + employer.value);
});
</script>

<style lang="scss" scoped></style>
