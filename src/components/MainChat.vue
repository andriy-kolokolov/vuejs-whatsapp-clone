<template>
    <div class="chat-container">
        <div class="messages-container" v-for="(contact, index) in contacts" :key="index">
            <div class="first-message-date" v-if="index === selectedContact">
                {{ getFirstMsgDate() }}
            </div>
            <div v-if="index === selectedContact">
                <div v-for="(message, index) in contact.messages" :key="index" class="message-wrap">
                    <div v-if="message.status === 'sent'" class="message sent">
                        <div class="message-txt">{{ message.message }}</div>
                        <div class="message-date">{{ getReadableDate(message.date) }}</div>
                    </div>
                    <div v-else class="message received">
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
        getFirstMsgDate() {
            const messages = this.contacts[this.selectedContact].messages;
            return this.getReadableDate(messages[0].date);
        },
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
    padding: 20px 30px 0 30px;
}

.messages-container {
    display: flex;
    flex-direction: column;
}

.first-message-date {
    background-color: #d1e9f3;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    align-self: center;
}

.message {
    display: flex;
    width: 350px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}

.message {
    display: flex;
    justify-content: space-between;
}

.message-date {
    font-size: .75rem;
    display: flex;
    align-items: end;
    justify-content: end;
    flex-basis: 40%;
}

.message.received {
    background-color: #fdfdfd;
}

.message.sent {
    background-color: #d3f7b9;
    margin-left: auto;
}


</style>