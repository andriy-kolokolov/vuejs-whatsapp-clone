<template>
    <div class="message-input-container">
        <div class="row g-0 wrapper">
            <div class="col-1 emoji">
                <i class="fa-regular fa-face-smile"></i>
            </div>

            <div class="col d-flex align-items-center msg-input-wrapper">
                <div class="w-100 form-group">
                    <input
                            type="text"
                            class="form-control"
                            id="input-msg"
                            placeholder="Message..."
                            v-model="message"
                            @keyup.enter="sendMessage"
                    >
                </div>
            </div>

            <div class="col-1 mic">
                <i class="fa-solid fa-microphone"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainMessageInput",
    data() {
        return {
            message: ''
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
        sendMessage() {
            this.$emit('send-message', this.message);
            this.message = '';
            console.log("sent to app component")
        }
    }
}
</script>

<style scoped>
.message-input-container {
    background-color: #f3eeea;
}

.wrapper {
    padding: var(--padding-header);
}

.emoji {
    display: grid;
    place-items: center;
    font-size: var(--ico-size);
}

.mic {
    display: grid;
    place-items: center;
    font-size: var(--ico-size);
}

.form-control:focus {
    transition: .2s;
    outline: none;
    border-color: rgba(0, 215, 96, 0.5) !important;
    box-shadow: 0 0 0 0.25rem rgba(0, 215, 96, 0.2);
}


</style>