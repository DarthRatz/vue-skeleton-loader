<template>
    <div class="profile-card">
        <div class="profile-image">
            <img :src="userData.image" />
        </div>
        <div class="profile-info">
            <span>Written By</span>
            <h3>{{ userData.firstName }} {{ userData.lastName }}</h3>
            <p>{{ userData.email }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

const userId = Math.ceil(Math.random() * 25)
const userDataURL = `https://dummyjson.com/users/${userId}`;

export default {
    async setup() {
        const userData = ref(await (await fetch(userDataURL)).json());
        return {
            userData
        };
    }
}
</script>

<style>
.profile-card {
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  20px  20px 60px #bebebe,
                -20px -20px 60px #ffffff;
    width: 100%;
    max-width: 700px;
    min-height: 180px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 20px;
}

.profile-image {
    width: 10%;
    float: left;
}

.profile-image img {
    background-color: azure;
    width: 100%;
    height: auto;
    border-radius: 50%;
    border: 5px solid #bada55;
    padding: 5px;
}

.profile-info {
    width: 85%;
    float: right;
}

.profile-info span {
    text-transform: uppercase;
    color: #777;
    letter-spacing: 3px;
}

.profile-info h3 {
    margin: 10px 0;
    font-size: 1.5em;
    color: #222;
}

.profile-info p {
    line-height: 140%;
    color: #777;
}
</style>