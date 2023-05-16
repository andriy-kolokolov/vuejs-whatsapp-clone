<template>
    <div class="chat-container">
        <div class="messages-container" v-for="(contact, index) in contacts" :key="index" v-if="isContactSelected">
            <div class="first-message-date" v-if="index === idSelectedContact && isMessagesArrayEmpty">
                {{ getFirstMsgDate() }}
            </div>
            <div v-if="index === idSelectedContact">
                <div v-for="(message, index) in contact.messages" :key="index" class="message-wrap" :id="index">
                    <!--    SENT MESSAGE    -->
                    <div v-if="message.status === 'sent'" class="message sent" :id="index">
                        <div class="message__left">{{ message.message }}</div>
                        <div class="message__right">
                            <div class="dropdown">
                                <button class="caret-msg-dropdown btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <button class="dropdown-item" @click="deleteMessage(index)">Delete</button>
                                    </li>
                                    <li>
                                        <button class="dropdown-item" @click="deleteMessageForAll(index)">Delete for all
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div>{{ getReadableDate(message.date) }}</div>
                        </div>
                    </div>
                    <!--    RECEIVED MESSAGE    -->
                    <div v-else-if="message.status === 'received'" class="message received" :id="index">
                        <div class="message__left">{{ message.message }}</div>
                        <div class="message__right">
                            <div class="dropdown">
                                <button class="caret-msg-dropdown btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <button class="dropdown-item" @click="deleteMessage(index)">Delete</button>
                                    </li>
                                    <li>
                                        <button class="dropdown-item">Info</button>
                                    </li>
                                </ul>
                            </div>
                            <div>{{ getReadableDate(message.date) }}</div>
                        </div>
                    </div>
                    <!--    DELETED RECIEVED MESSAGE    -->
                    <div v-else-if="message.status === 'received deleted'" class="message received deleted">
                        <div>{{ message.message }}</div>
                    </div>
                    <!--    DELETED SENT MESSAGE    -->
                    <div v-else-if="message.status === 'sent deleted'" class="message sent deleted">
                        <div>{{ message.message }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="no-selected-contact">
            <p class="no-selected-contact__txt">Select contact to start chat...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainChat",
    props: {
        idSelectedContact: {
            type: Number,
            required: true
        },
        isContactSelected: {
            type: Boolean,
            required: true
        },
        contacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(id) {
            const messages = this.contacts[this.idSelectedContact].messages;
            messages.splice(id, 1);
        },
        deleteMessageForAll(id) {
            let messages = this.contacts[this.idSelectedContact].messages;
            messages[id].message = 'You deleted this message';
            messages[id].status += ' deleted';
        },
        getFirstMsgDate() {
            const messages = this.contacts[this.idSelectedContact].messages;
            if (messages.length !== 0) {
                return this.getReadableDate(messages[0].date);
            } else {
                console.log("Messages are empty");
            }
        },
        getReadableDate(dateString) {
            const [datePart, timePart] = dateString.split(' ');
            const [day, month, year] = datePart.split('/');
            const [hours, minutes, seconds] = timePart.split(':');
            const isoDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
            const options = {month: 'short', day: 'numeric', year: 'numeric'};
            return isoDate.toLocaleDateString('en-US', options);
        },
        isMessagesArrayEmpty() {
            return this.contacts[this.idSelectedContact].messages.length === 0;
        }
    }
}
</script>

<style scoped>
.chat-container {
    --bg-c-msg-received: #fdfdfd;
    --bg-c-msg-sent: #d3f7b9;


    background-image: url("@/assets/img/mine.jpg");
    background-position: center;
}

.messages-container {
    display: flex;
    flex-direction: column;
    max-width: 85%;
    margin: 0 auto;
}

.first-message-date {
    background-color: #d1e9f3;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    align-self: center;
    margin: 20px 0 10px 0;
}

.message {
    display: flex;
    max-width: 300px;
    padding: 10px 15px;
    border-radius: 10px;
    margin-top: 8px;
}

.message {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.message__left {
    flex: 1 1 70%;
    max-width: 100%;
    word-wrap: break-word;
}

.message__right {
    font-size: .75rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    flex: 1 1 30%;
}

.message__right div {
    align-self: end;
}

.message.received {
    background-color: var(--bg-c-msg-received);
}

.message.sent {
    background-color: var(--bg-c-msg-sent);
    margin-left: auto;
}

/*.message.received.deleted {*/
/*    background-color: var(--bg-c-msg-received);*/
/*    font-style: italic;*/
/*    color: rgba(0, 0, 0, 0.6);*/
/*}*/

.message.sent.deleted {
    background-color: var(--bg-c-msg-sent);
    margin-left: auto;
    font-style: italic;
    color: rgba(0, 0, 0, 0.6);
}

.no-selected-contact {
    cursor: default;
    display: grid;
    place-items: center;
    height: 100%;
    padding: 5px;
    border-radius: 5px;
}

.no-selected-contact__txt {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: var(--link-opacity);
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 18px;
}

.caret-msg-dropdown {
    border: 0;
    padding: 0;
    margin-top: 15px;
    background-color: transparent;
    color: black;
    opacity: var(--link-opacity);
    display: flex;
}

.caret-msg-dropdown i {
    padding: 5px;
}

.caret-msg-dropdown:active {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.7);
}

.caret-msg-dropdown:after {
    display: none;
}

</style>