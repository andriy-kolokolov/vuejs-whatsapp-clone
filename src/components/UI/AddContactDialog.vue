<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div class="dialog__content" @click.stop>
            <div class="input-group mb-3">
                <span class="input-group-text" id="input-label">Contact name</span>
                <input v-model="newContactName" @keyup.enter="addContact" type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default">
            </div>
            <input @click="addContact" type="button" value="Add new contact" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "AddContactDialog",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('hide-dialog-add-contact', false);
        },
        addContact() {
            if (this.newContactName !== '') {
                this.$emit('add-contact', this.newContactName)
                this.newContactName = '';
                this.hideDialog();
            } else {
                console.log("New contact name is empty")
            }
        }
    },
    data() {
        return {
            newContactName: '',
        }
    }
}
</script>

<style scoped>
.dialog {
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 50px;
    padding: 20px;
}

.input-group {
    width: 30vw;
}
</style>