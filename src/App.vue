<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import AsideHeader from "@/components/AsideHeader.vue";
import AsideContacts from "@/components/AsideContacts.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainChat from "@/components/MainChat.vue";
import MainMessageInput from "@/components/MainMessageInput.vue";
</script>

<template>
    <aside class="aside">
        <aside-header class="aside__header"></aside-header>
        <aside-contacts class="aside__contacts"></aside-contacts>
    </aside>

    <main class="main">
        <main-header class="main__header"></main-header>
        <main-chat class="main__chat"></main-chat>
        <main-message-input class="main__message-input"></main-message-input>
    </main>
</template>

<style>

.aside {
    display: flex;
    flex-direction: column;
    width: var(--aside-width);
    height: 100%;
}

.aside__header {
    flex: 0 0 auto;
    overflow: auto;
}

.aside__contacts {
    flex: 1 1 auto;
    overflow: auto;
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto; /* allow the main container to adapt to its content */
}

.main__header {
    flex: 0 0 auto;
}

.main__chat {
    flex: 1 1 auto;
    overflow-y: auto; /* add a scrollbar to the message container */
    max-height: calc(100% - 60px); /* set the maximum height to the available space minus the heights of the header and message input */
}

.main__message-input {
    flex: 0 0 auto;
}
</style>
