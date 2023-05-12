<template>
    <div class="chat-container">
        <div class="messages-container" v-for="(contact, index) in contacts" :key="index">
            <div class="contact-name" v-if="index === selectedContact">{{ contact.name }}</div>
            <div v-if="index === selectedContact">
                <div v-for="(message, index) in contact.messages" :key="index" class="message">
                    <div v-if="message.status === 'sent'" class="message-sent">
                        <div class="message-txt">{{ message.message }}</div>
                        <div class="message-date">{{ getReadableDate(message.date) }}</div>
                    </div>
                    <div v-else class="message-received">
                        <div class="message-txt">{{ message.message }}</div>
                        <div class="message-date">{{ getReadableDate(message.date) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainChat",
    props: {
        selectedContact: {
            type: Number,
            required: true
        },
        contacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getReadableDate(dateString) {
            const [datePart, timePart] = dateString.split(' ');
            const [day, month, year] = datePart.split('/');
            const [hours, minutes, seconds] = timePart.split(':');
            const isoDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
            const options = {month: 'short', day: 'numeric', year: 'numeric'};
            return isoDate.toLocaleDateString('en-US', options);
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