<script setup lang="ts"></script>

<template>
    <section class="am-content-container">
        <router-view />
    </section>
</template>

<style scoped lang="scss">
@include b(content-container) {
    width: 100%;
    height: 100%;
    background-color: darkgray;
}
</style>
