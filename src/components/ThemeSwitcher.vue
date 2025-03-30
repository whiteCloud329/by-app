<template>
    <a-dropdown>
        <template #overlay>
            <a-menu @click="changeLayout">
                <a-menu-item
                    v-for="layout in layouts"
                    :key="layout"
                    :value="layout"
                >
                    {{ layout }}
                </a-menu-item>
            </a-menu>
        </template>
        <a-button>切换布局</a-button>
    </a-dropdown>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/store/theme.ts'
import { LayoutType } from '@/types/layout.ts'

defineOptions({ name: 'ThemeSwitcher' })

const themeStore = useThemeStore()
const layouts: LayoutType[] = ['normal', 'top', 'expended']
const changeLayout = ({ key }: { key: LayoutType }) => {
    themeStore.setTheme(key)
}
</script>
<style scoped lang="scss"></style>
