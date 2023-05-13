<template>
    <div class="header-container">
        <div v-if="isContactSelected" class="profile-wrapper">
            <div class="profile-wrapper__left">
                <div class="avatar-wrapper">
                    <img :src="getAvatar()" alt=""/>
                </div>
                <div class="profile-info">
                    <div class="profile-name">{{ getName() }}</div>
                    <div class="profile-last-access">last seen {{ getLastMsgTime() }}</div>
                </div>
            </div>

            <div class="profile-wrapper__right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-paperclip"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>

<!--        <div v-else>-->
<!--            <h1>select contact to start chat</h1>-->
<!--        </div>-->
    </div>
</template>

<script>
import {DateTime} from "luxon";

export default {
    name: "MainHeader",
    props: {
        isContactSelected: {
            type: Boolean,
            required: true
        },
        idSelectedContact: {
            type: Number,
            required: true
        },
        contacts: {
            type: Array,
            required: true
        }
    },
    methods: {
        getName() {
            return this.contacts[this.idSelectedContact].name;
        },
        getAvatar() {
            return this.contacts[this.idSelectedContact].avatar;
        },
        getLastMsgTime() {
            const messages = this.contacts[this.idSelectedContact].messages;
            //find last received message and return its date
            for (let i = messages.length - 1; i > 0; i--) {
                if (messages[i].status === 'received') {
                    return this.getReadableDate(messages[i].date)
                }
            }
        },
        getReadableDate(dateString) {
            const isoDate = DateTime.fromFormat(dateString, 'dd/MM/yyyy HH:mm:ss');
            return isoDate.toFormat('dd/MM/yyyy HH:mm');
        },
    }
}
</script>

<style scoped>
.header-container {
    background-color: var(--c-bg-white);
    height: var(--profile-wrapper-height);
}

.profile-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: var(--padding-header);
}

.profile-wrapper__left {
    display: flex;
    align-items: center;
}

.profile-wrapper__right {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.profile-info {
    margin-left: 20px;
}

.profile-name {
    font-weight: bold;
}

.profile-last-access {
    font-size: .8rem;
}

.profile-wrapper__right i {
    font-size: var(--ico-size);
}

.avatar-wrapper {
    height: 100%;
}

.avatar-wrapper img {
    border-radius: 50%;
    height: 100%;
}


</style>