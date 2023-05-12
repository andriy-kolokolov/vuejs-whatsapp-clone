<template>
    <div class="aside-header-container">
        <div class="profile-wrapper">
            <div class="profile-wrapper__left">
                <div class="avatar-wrapper">
                    <img src="../assets/img/avatar_io.jpg" alt=""/>
                </div>
                <div class="profile-name">Sofia</div>
            </div>
            <div class="profile-wrapper__right">
                <i class="fa-solid fa-circle-notch"></i>
                <i class="fa-solid fa-message"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>

        <div class="notifications-wrapper">
            <div class="bell-wrapper">
                <i class="fa-solid fa-bell-slash"></i>
            </div>
            <div class="txt">
                <h6 class="">Receive new messages notifications</h6>
                <a href="#">Turn On notifications</a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "AsideHeader"
}
</script>

<style scoped>
.aside-header-container {
    width: var(--aside-width);
    background-color: var(--c-bg-white);
}

.profile-wrapper {
    height: var(--profile-wrapper-height);
    display: flex;
    justify-content: space-between;
    padding: var(--padding-header);
}

.profile-wrapper__left {
    flex-basis: 30%;
    display: flex;
    align-items: center;
}

.profile-wrapper__left .profile-name{
    padding-left: 10px;
    font-weight: bold;
}

.profile-wrapper__right {
    display: flex;
    align-items: center;
}

.profile-wrapper__right i {
    font-size: var(--ico-size);
}

.avatar-wrapper img {
    border-radius: 50%;
    width: 100%;
}

.notifications-wrapper {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #8edafc;
}

.notifications-wrapper .txt{
    padding-left: 10px;
}

.notifications-wrapper .txt h6 {
    margin: 0;
}

.bell-wrapper {
    padding: .5rem;
    font-size: var(--ico-size);
    background-color: var(--c-bg-white);
    border-radius: 50%;
}

.bell-wrapper i {
    color: #8edafc;
}

.notifications-wrapper {
    padding: 10px;
}
</style>