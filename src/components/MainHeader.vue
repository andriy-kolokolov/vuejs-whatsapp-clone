<template>
    <div class="header-container">
        <div class="profile-wrapper">
            <div class="profile-wrapper__left">
                <div class="avatar-wrapper">
                    <img src="../assets/img/avatar_io.jpg" alt=""/>
                </div>
                <div class="profile-info">
                    <div class="profile-name">Sofia</div>
                    <div class="profile-last-access">100 days ago</div>
                </div>
            </div>

            <div class="profile-wrapper__right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-paperclip"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainHeader"
}
</script>

<style scoped>
    .header-container {
        background-color: var(--c-bg-white);
    }

    .profile-wrapper {
        height: var(--profile-wrapper-height);
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
        gap: 1rem;
        margin-right: 10px;
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