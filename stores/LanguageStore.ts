import { defineStore } from "pinia"

export const useLanguageStore = defineStore('language',() => {
  const language = ref('jp')

  const changeLanguage = (lang: string) => {
    language.value = lang
  }

  return { ... language, changeLanguage }
})
