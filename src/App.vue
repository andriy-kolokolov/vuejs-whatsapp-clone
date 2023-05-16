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
        <aside-header class="aside__header"/>
        <aside-contacts
                class="aside__contacts"
                :contacts="getFilteredContacts()"
                :is-contact-selected="isContactSelected"
                :id-selected-contact="selectedContact"
                @search="manageSearchInput"
                @contact-click="selectContact"
        />
    </aside>

    <main class="main">
        <main-header
                class="main__header"
                :contacts="getFilteredContacts()"
                :is-contact-selected="isContactSelected"
                :id-selected-contact="selectedContact"
        />
        <main-chat
                class="main__chat"
                :contacts="getFilteredContacts()"
                :is-contact-selected="isContactSelected"
                :id-selected-contact="selectedContact"

        />
        <main-message-input
                class="main__message-input"
                :contacts="getFilteredContacts()"
                :is-contact-selected="isContactSelected"
                :id-selected-contact="selectedContact"
                @send-message="addMessage"
        />
    </main>
</template>

<script>
import {DateTime} from "luxon";
import ReplyMessageGenerator from './util/ReplyMessageGenerator'

export default {
    methods: {
        selectContact(selectedContactIndex) {
            // to change bg color of selected contact
            this.isContactSelected = true;
            this.selectedContact = selectedContactIndex;
        },
        manageSearchInput(searchTerm) {
            this.isContactSelected = false;
            this.searchTerm = searchTerm;
        },
        getFilteredContacts() {
            // refresh contacts when typing in search input
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        },
        addMessage(message) {
            // temporary store contact ID to prevent sending message in wrong chat
            this.tempSelectedContact = this.selectedContact
            this.contacts[this.tempSelectedContact].messages.push(
                    {
                        date: this.getCurrentDateTime(),
                        message: message,
                        status: 'sent'
                    }
            );
            setTimeout(this.requestReply, 1000);
        },
        requestReply() {
            const replyMsgGenerator = new ReplyMessageGenerator(this.userName, this.language)
            this.contacts[this.tempSelectedContact].messages.push(
                    {
                        date: this.getCurrentDateTime(),
                        message: replyMsgGenerator.getJoke(),
                        status: 'received'
                    }
            );
        },
        getCurrentDateTime() {
            return DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss');
        }
    },
    data() {
        return {
            userName: 'Sofia',
            language: 'it',
            isContactSelected: false,
            selectedContact: 0,
            searchTerm: '',
            tempSelectedContact: 0,  // temporary store contact ID to prevent sending message in wrong chat
            contacts: [
                {
                    name: 'Michele',
                    avatar: './src/assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '11/01/2020 16:15:22',
                            message: 'Sicuro?',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 16:15:22',
                            message: 'Fidati !!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './src/assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './src/assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './src/assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './src/assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './src/assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './src/assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './src/assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '11/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '12/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ]
        }
    }
}
</script>

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
