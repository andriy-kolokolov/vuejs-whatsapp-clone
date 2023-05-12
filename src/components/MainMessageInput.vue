<template>
    <div class="message-input-container">
        <div class="row g-0 wrapper">
            <div class="col-1 emoji">
                <i class="fa-regular fa-face-smile"></i>
            </div>

            <div class="col d-flex align-items-center msg-input-wrapper">
                <div class="w-100 form-group">
                    <input type="text" class="form-control" id="input-msg" placeholder="Message...">
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
    name: "MainMessageInput"
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

    .form-control,
    .form-control:focus{
        border: 0;
        box-shadow: none;
    }

</style>