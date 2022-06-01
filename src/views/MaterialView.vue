<template>
    <div>
        <p>Les pelotes</p>
        <div class="all-cards">
            <div v-for="(wool, index) in wools" :key="index">
                <div class="wool-card">
                    <img v-bind:src="wool.picture" alt="wool picture">
                    <p class="wool-title">{{ wool.name }}</p>
                    <button class="btn" @click="pushToWool(wool)">voir plus</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            wools:{},
        }
    },
    async mounted() {
        await this.getTotalWools();
    },

    methods:{
        async getTotalWools(){
            const response = await fetch(`https://127.0.0.1:8000/api/wool`, {
                headers:{
                    accept: 'application/json'
                }
            });
            const wools = await response.json();
            this.wools = wools;
        },
        //fonction qui permet quand on clique sur le bouton router.push d'aller sur la page de detail du post
        pushToWool(wool) {
        this.$router.push({ path: "/detailWool", query: { id: wool.id } });
        },
    }
}
</script>

<style scoped>
.wool-card{
    display: flex;
    flex-direction: column;
    max-width: 15em;
    background-color:#F4E6E2;
    padding:1em;
    margin:2em;
    border-radius: 10px;
}
.all-cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1em;
}
.wool-title{
    font-weight: bold;
}
.btn{
    display: flex;
    justify-content: center;
    align-items:center;
    align-self: center;
    width:10em;
    height: 3em;
    margin:1em;
    background-color: #D3BBB4;
    border-radius: 10px;
    border:none;
    color:white;
    font-weight: bolder;  
}
</style>