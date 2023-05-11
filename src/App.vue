<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AsideHeader from "@/components/aside/AsideHeader.vue";
import AsideContacts from "@/components/aside/AsideContacts.vue";
</script>

<template>

    <aside>
        <aside-header/>
        <aside-contacts/>
    </aside>

    <main>
        <div></div>
    </main>

</template>

<script>

</script>

<style>

aside {
    --aside-width: 400px;
    --aside-header-height: 10%;
    --aside-contacts-height: 70%;

    width: 400px;
    height: 100%;
}

main {
    width: calc(100% - 400px);
    height: 100%;
}
</style>
