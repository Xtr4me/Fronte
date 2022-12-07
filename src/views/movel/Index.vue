<template>
  <div>
    <h1>Movel Cadastrado</h1>
    <hr />
    <table border="1">
      <tr>
        <th>Nome</th>
        <th>Editar</th>
        <th>Excluir?</th>
      </tr>
      <tr v-for="p in movel">
        <td>{{ p.movel }}</td>
        <td>
          <router-link :to="{ name: 'movel-edit', params: { id: p.id } }"
            >Editar</router-link
          >
        </td>
        <td><button @click="destroy(p.id)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import env from "/env.json";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const apiURL = env.apiURL;

const movel = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/movel")
    .then((response) => {
      movel.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.status);
    });
};

const destroy = (id) => {
  if (confirm("Deseja excluir o funcionario?")) {
    axios
      .delete(apiURL + "/movel/" + id)
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
  console.log("data: " + movel.value);
});
</script>

<style lang="scss" scoped></style>
