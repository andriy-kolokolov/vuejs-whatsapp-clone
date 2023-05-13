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
    <!--
        TODO
            -Move search contact input in <AsideHeader> component to fix scrollbar in <AsideContacts> issue
            -After searching for contacts and selecting a contact, the wrong contact's chat is being rendered
    -->
    <aside class="aside">
        <aside-header class="aside__header"/>
        <aside-contacts
                class="aside__contacts"
                :filtered-contacts="getFilteredContacts()"
                :selected-contact="selectedContact"
                @search="getSearchTerm"
                @contact-click="selectContact"
        />
    </aside>

    <main class="main" >
        <main-header
                class="main__header"
                :contacts="contacts"
                :selected-contact="selectedContact"
        />
        <main-chat
                class="main__chat"
                :contacts="contacts"
                :selected-contact="selectedContact"
        />
        <main-message-input class="main__message-input"/>
    </main>
</template>

<script>
export default {
    methods: {
        selectContact(selectedContactIndex) {
            this.selectedContact = selectedContactIndex;
        },
        getSearchTerm(searchTerm) {
            this.searchTerm = searchTerm;
        },
        getFilteredContacts() {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        }
    },
    data() {
        return {
            selectedContact: 0,
            searchTerm: '',
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
