<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div class="flex-row md:flex items-center justify-around">
    <div class="pl-0 md:pl-8">
      <div class="policy">
        <p>Create.</p>
        <p>Develop.</p>
        <p>Fun!</p>
      </div>
      <div class="mt-4 text-xl text-center md:text-left w-full md:w-1/2 px-4 md:px-0">
        <p>{{ $t('index.introduction') }}</p>
      </div>
    </div>
    <div>
    </div>
  </div>

</template>

<style scoped>
.policy {
  @apply font-montserrat text-6xl md:text-8xl text-center md:text-left mt-10 md:mt-20;
}

.policy p {
  @apply my-2;
}
</style>