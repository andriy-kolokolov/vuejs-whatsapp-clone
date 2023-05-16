<template>
    <button class="btn-add-contact btn btn-success" type="button" value="" @click="addNewContact">
        <i class="fa-solid fa-plus"></i>
    </button>
</template>

<script>
export default {
    name: "AddContactButton",
    methods: {
        addNewContact() {
            this.$emit('add-contact')
        },
    }
}
</script>

<style scoped>

.btn-add-contact {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    outline: none;
    opacity: .5;
    transition: var(--link-transition);
}

.btn-add-contact:hover {
    opacity: 1;
}

.btn-add-contact i {
    font-weight: bold;
    font-size: 30px;
}
</style>