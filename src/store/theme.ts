import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LayoutType } from '@/types/layout.ts'

export const useThemeStore = defineStore('theme', () => {
    const currentTheme = ref<LayoutType>(
        (localStorage.getItem('theme') as LayoutType) || 'normal',
    )
    const setTheme = (theme: LayoutType) => {
        currentTheme.value = theme
        localStorage.setItem('theme', theme)
    }
    return { currentTheme, setTheme }
})
