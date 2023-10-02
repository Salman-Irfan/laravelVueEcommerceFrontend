<template>
    <h1>Home view</h1>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
const test = computed(()=>{
    return store.state.test
})
</script>

<script>
export default {
    name: "HomeView",
}
</script>

