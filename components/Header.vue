<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const isMenuOpen: Ref<boolean> = ref(false)

const paths = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
]

const languages = [
  {
    name: '日本語',
    locale: 'ja',
    flag: '🇯🇵'
  },
  {
    name: 'English',
    locale: 'en',
    flag: '🇺🇸'
  },
]

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  setLocale(target.value);
};
</script>

<template>
  <header class="flex justify-between items-center px-12 py-4 border-b border-green-600">
    <NuxtLink to="/">
      <div>
        nemunyan's Room {{ locale }}
      </div>
    </NuxtLink>
    <div class="flex flex-row gap-4">
      <select :value="locale" @change="handleChange">
        <option v-for="language in languages" :key="language.locale" :value="language.locale">
          {{ language.flag }} {{ language.name }}
        </option>
      </select>
      <button class="block md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg v-if="!isMenuOpen" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="hidden md:flex gap-4">
        <div v-for="path in paths" :key="path.name">
          <NuxtLink :to="path.path">{{ path.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </header>
  <div v-if="isMenuOpen" class="md:hidden flex-col items-center justify-center">
    <NuxtLink v-for="path in paths" :to="path.path"
      class="border-b border-green-600 flex items-center justify-center h-12">
      <div :key="path.name">
        {{ path.name }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
select {
  @apply bg-transparent border-none text-green-600;
}

</style>