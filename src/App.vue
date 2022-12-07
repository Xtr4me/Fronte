<script setup>
import Home from '@/views/Home.vue';
</script>

<template>
  <div>
    <h1>Projeto Movel</h1>
    <ul>
      <li> <router-link to="/">Início</router-link> </li>
      <li> Movel
        <ul>
          <li> <router-link to="/movel">Listar Moveis</router-link> </li>
          <li> <router-link to="/movel/cadastrar">Cadastrar Moveis</router-link> </li>
        </ul>
      </li>
      <li> Funcionario
        <ul>
          <li> <router-link to="/employer">Listar Funcionario</router-link> </li>
          <li> <router-link to="/employer/cadastrar">Cadastrar Funcionario</router-link> </li>
        </ul>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>

</style>
