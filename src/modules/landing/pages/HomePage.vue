<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Bienvenido a nuestro sitio web</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
