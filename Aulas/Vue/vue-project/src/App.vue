<script setup lang="ts">
import { reactive } from 'vue';

  const nome:string = "Lucas Teixeira";
  const obj = {
    nome: "Lucas",
    filmeFavorito: "Rocky"
  }
  function sayHello(nome:string) {
    return `${nome} diz oi!`
  }

  const imgAddress = "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.webp?w=1450&h=816"
  const img2 = "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg"

  const isButtonDeactived = false
  const likeCats = true
  const likeDogs = false

  // let count:number = 0;
  const estado = reactive({
    count: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['Lucas', 'Julia', 'Arthur', 'Manuela', 'Pedro'],
    inputedName: '',
  })

  function addCount() {
    return estado.count++
  }
  function removeCount() {
    return estado.count--
  }
  function changeEmail(e:any) {
    estado.email = e.target.value
  }
  function showBalanceFuture() {
    const { saldo, transferindo } = estado;
    return saldo - transferindo;
  }
  function checkTransfer() {
    const { saldo, transferindo } = estado;
    return saldo >= transferindo;
  }
</script>

<template>
  <h1>{{ sayHello("Paula") }}</h1>
  <img v-if="likeCats" :src="imgAddress" alt="">
  <img v-else-if="likeDogs" :src="img2" alt="">
  <h2 v-else>Não gosta de animais</h2>
  <button :disabled="isButtonDeactived">Enviar Mensagem</button>

  {{ estado.count }}

  <br />
  <hr />

  <button @click="addCount" type="button">+</button>
  <button @click="removeCount" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}

  <input type="email" @keyup="changeEmail">

  <br />
  <hr />

  Saldo: {{ estado.saldo }} <br />
  Transferindo: {{ estado.transferindo }} <br />
  Saldo após transferência: {{ showBalanceFuture() }} <br />
  <input 
    @keyup="(e: KeyboardEvent) => {
      if (e.target) {
        estado.transferindo = Number((e.target as HTMLInputElement).value) 
      } 
    }"
    type="number" 
    placeholder="Quantia para transferir"
    :class="{ invalido: !checkTransfer() }" 
  >
  <button v-if="checkTransfer()">Transferir</button>
  <span v-else>Valor Maior que o saldo</span>

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input 
  @keyup="(e: KeyboardEvent) => {
    if (e.target) {
      const newName: string = (e.target as HTMLInputElement).value
      return estado.inputedName = newName
    }
  }"
  type="text" placeholder="Digite um outro nome">
  <button @click="() => {
    if (estado.inputedName.length > 3) {
      estado.nomes.push(estado.inputedName)
    } else {
      return
    }
  }">Adicionar</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>
  img {
    width: 180px;
    display: block;;
  }
  .invalido {
    outline-color: red;
  }
</style>
