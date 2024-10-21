<script setup lang="ts">
</script>

<template>
  <Header />
  <div>
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>

<style>
  body {
    @apply bg-gray-950 text-slate-400 font-mono text-green-600;
  }
</style>