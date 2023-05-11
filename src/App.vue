<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AsideHeader from './components/aside/AsideHeader.vue'
import ContactsContainer from './components/aside/AsideContainer.vue'
// import components
</script>

<template>

  <aside>
    <aside-header/>
    <contacts-container/>
  </aside>

  <main>
    <div>it works!</div>
  </main>
</template>

<script>

</script>

<style scoped>
aside {
  width: 30%;
  height: 100%;
}

main {
  width: 70%;
  height: 100%;
}
</style>
