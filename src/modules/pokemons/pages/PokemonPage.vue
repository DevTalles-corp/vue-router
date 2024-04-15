<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokémon <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
      width="200"
      height="200"
    />

    <RouterLink
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-700"
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();
</script>
