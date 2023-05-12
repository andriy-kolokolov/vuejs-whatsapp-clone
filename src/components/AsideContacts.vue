<template>
    <div class="contacts-container">
        <div class="contacts__input-search input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-label-icon input-group-text" id="search-contact">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <input type="text"
                    class="form-control"
                    placeholder="Search contact..."
                    aria-label="Search"
                    aria-describedby="search-contact"
                    v-model="searchTerm"
                    @input="updateContacts"
            >
        </div>

        <div class="contacts-wrapper">
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
    name: "AsideContacts",
    data() {
        return {
            searchTerm: '',
        }
    },
    props: {
        contacts: {
            type: Array,
            required: true
        },
        filteredContacts: {
            type: Array
        }
    },
    methods: {
        updateContacts() {
            this.$emit('search', this.searchTerm);
        }
        ,
        convertToISO(dateString) {
            const [datePart, timePart] = dateString.split(' ');
            const [day, month, year] = datePart.split('/');
            const [hours, minutes, seconds] = timePart.split(':');
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
        // filteredContacts() {
        //     return this.contacts.filter((contact) => {
        //         return contact.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        //     });
        // }
    }
}
</script>

<style scoped>
.contacts-container {
    --contact-height: 80px;

    background-color: var(--c-bg-white);
}

.contacts-wrapper {
    margin-top: var(--search-contacts-height);
}

.contacts__input-search {
    position: fixed;
    width: var(--aside-width);
    z-index: 99;
    background-color: var(--c-bg-white);
}

.contacts__input-search .input-group-text {
    background-color: white;
    border: 0;
}

.contacts__input-search .form-control,
.contacts__input-search .form-control:focus {
    border: 0;
    box-shadow: none;
}

.input-label-icon {
    height: 100%;
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