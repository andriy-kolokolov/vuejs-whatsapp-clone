<!--    component 2    -->

<template>
    <div class="chat-container">
        <div
                class="messages-container"
                v-for="(contact, index) in contacts"
                :key="index">
            <div class="contact-name">{{ contact.name }}</div>
            <div v-for="(message, index) in contact.messages" :key="index" class="message">
                <div v-if="message.status === 'sent'" class="sent">{{ message.message }}</div>
                <div v-else class="received">{{ message.message }}</div>
                <div class="message-date">{{ message.date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainChat",
    props: {
        contacts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.chat-container {
    background-image: url("@/assets/img/mine.jpg");
    background-position: center;
}
</style>