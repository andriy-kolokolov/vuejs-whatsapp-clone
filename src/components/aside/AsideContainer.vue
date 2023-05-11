<script setup>
import NotificationsAlert from "@/components/aside/NotificationsAlert.vue";
import AsideHeader from "@/components/aside/AsideHeader.vue";
</script>

<template>
  <div class="aside-container">
    <aside-header/>

    <notifications-alert/>

    <div class="contacts-wrapper">
      <input class="contacts-wrapper__input-search" type="text" v-model="searchTerm"/>
      <div class="contacts-wrapper__contacts" :style="{ width: '100%' }">
        <div class="contact" v-for="(contact, index) in filteredContacts"
            :key="index"
        >
          <div class="contact-content">
            <div class="contact-content-left">
              <div class="contact--content__avatar-wrapper">
                <img :src="contact.avatar" alt="">
              </div>
              <div class="contact-content__wrap-name-msg">
                <div class="contact-content__name">{{ contact.name }}</div>
                <div class="contact-content__message">{{ contact.messages[0].message }}</div>
              </div>
            </div>
            <div class="contact-content-right">
              <div class="contact-content__date">{{ getTimePassed(contact.messages[0].date) }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AsideContainer",
  data() {
    return {
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
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        },
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
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ]

    }
  },
  methods: {
    convertToISO(dateString) {
      // Split the string into its components
      const [datePart, timePart] = dateString.split(' ');
      // Split the date part into day, month, and year
      const [day, month, year] = datePart.split('/');
      // Split the time part into hours, minutes, and seconds
      const [hours, minutes, seconds] = timePart.split(':');
      // Create a new Date object with the components in ISO format
      const isoDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
      return isoDate.toISOString();
    },
    getTimePassed(lastMsgDate) {
      const convertedToISO = this.convertToISO(lastMsgDate);
      const timeDiff = Math.floor((new Date() - new Date(convertedToISO)) / 1000);
      if (timeDiff < 60) return `${timeDiff} seconds ago`;
      if (timeDiff < 3600) return `${Math.floor(timeDiff / 60)} minutes ago`;
      if (timeDiff < 86400) return `${Math.floor(timeDiff / 3600)} hours ago`;
      return `${Math.floor(timeDiff / 86400)} days ago`;
    }
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
}
</script>

<style scoped>
.aside-container {
  --search-height: 30px;
  --contact-height: 80px;
  --elements-padding: 10px;

  height: 100%;
  width: 400px;
  background-color: white;
}

.contacts-wrapper {
  height: 100%;
}

.contacts-wrapper__input-search {
  height: var(--search-height);
  width: 100%;
}

.contacts-wrapper__contacts {
  height: calc(100% - var(--search-height));
  overflow-y: auto;
}

.contact {
  /*background-color: crimson;*/
  height: var(--contact-height);
  display: flex;
}

.contact-content {
  display: flex;
  width: 100%;
}

.contact-content-left {
  display: flex;
  flex-basis: 80%;
}

.contact-content-right {
  flex-basis: 20%;
  display: flex;
  align-items: center;
}

.contact--content__avatar-wrapper {
  height: 100%;
  padding: 5px;
}

.contact--content__avatar-wrapper img {
  height: 100%;
  border-radius: 50%;
}

.contact-content__wrap-name-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: var(--elements-padding);
}

.contact-content__name {
  font-weight: 700;
}

.contact-content__message {
  font-size: .8rem;
  opacity: .7;
}

.contact-content__date {
  font-size: .7rem;
}

</style>