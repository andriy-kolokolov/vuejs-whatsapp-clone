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
            <div v-if="contacts.length > 0" class="contacts-wrapper__contacts">
                <div
                        class="contact"
                        v-for="(contact, index) in contacts"
                        :key="index"
                        :class="{ selected: isSelected(index), unselected: !isSelected(index) }"
                        @click="updateSelectedContact(index)"
                >
                    <div class="contact-content">
                        <div class="contact-content-left">
                            <div class="contact--content__avatar-wrapper">
                                <img :src="contact.avatar" alt="">
                            </div>
                            <div class="contact-content__wrap-name-msg">
                                <div class="contact-content__name">{{ contact.name }}</div>
                                <div class="contact-content__message">
                                    {{ contact.messages.length ? contact.messages[contact.messages.length - 1].message : 'No messages yet...' }}
                                </div>
                            </div>
                        </div>
                        <div class="contact-content-right">
                            <div class="contact-content__date">
                                {{ contact.messages.length ? getTimePassed(contact.messages[contact.messages.length - 1].date) : '' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="no-contacts-found">
                <p class="no-contacts-found__txt">Contact "{{ this.searchTerm }}" not found...</p>
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
            selectedIndex: this.idSelectedContact
        }
    },
    props: {
        contacts: {
            type: Array
        },
        idSelectedContact: {
            type: Number,
            required: true
        },
        isContactSelected: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        updateContacts() {
            this.$emit('search', this.searchTerm);
        },
        updateSelectedContact(contactIndex) {
            this.selectedIndex = contactIndex;
            this.$emit('contact-click', contactIndex);
        },
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
        },
        isSelected(index) {
            if (this.isContactSelected) {
                return index === this.selectedIndex;
            }
        }
    }
}
</script>

<style scoped>
.contacts-container {
    background-color: var(--c-bg-white);
}

.contacts-wrapper {
    margin-top: 50px;;
}

.contacts-wrapper__contacts {
    width: 100%;
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
    height: var(--aside-contact-height);
    display: flex;
    cursor: pointer;
    transition: var(--link-transition);
    padding: 10px;
}

.contact:hover {
    background-color: #b4d0e7;
}

.contact.selected {
    transition: .5s;
    background-color: #e3dcd3;
}

.contact-content {
    display: flex;
    width: 100%;
}

.contact-content-left {
    display: flex;
    flex-basis: 70%;
}

.contact-content-right {
    flex-basis: 30%;
    display: flex;
    align-items: start;
    justify-content: end;
    margin-top: 5px;
}

.contact--content__avatar-wrapper {
    height: 100%;
}

.contact--content__avatar-wrapper img {
    height: 100%;
    border-radius: 50%;
}

.contact-content__wrap-name-msg {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-left: var(--elements-padding);
    overflow: hidden;
}

.contact-content__name {
    font-weight: bold;
}

.contact-content__message {
    font-size: .85rem;
    opacity: .7;
}

.contact-content__date {
    font-size: .7rem;
    opacity: .8;
}

.no-contacts-found {
    height: 100%;
    display: grid;
    place-items: center;
}


</style>