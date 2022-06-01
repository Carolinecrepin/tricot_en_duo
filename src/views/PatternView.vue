<template>
    <div>
        <p>Tous les patrons</p>
        <p class="filter">Filtrer <i class="fa-solid fa-angle-down"></i></p> 
        <div class="all-cards">
            <div v-for="(pattern, index) in patterns" :key="index">
                <div class="pattern-card">
                    <img v-bind:src="pattern.picture">
                    <p class="pattern-title">{{ pattern.title }}</p>
                    <button class="btn" @click="pushToPattern(pattern)">voir plus</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            patterns:{},
        }
    },
    async mounted() {
        await this.getTotalPatterns();
    },

    methods:{
        async getTotalPatterns(){
            const response = await fetch(`https://127.0.0.1:8000/api/patterns`, {
                headers:{
                    accept: 'application/json'
                }
            });
            const patterns = await response.json();
            this.patterns = patterns;
            console.log(patterns)
        },
              
        //fonction qui permet quand on clique sur le bouton router.push d'aller sur la page de detail du post
        pushToPattern(pattern) {
        this.$router.push({ path: "/detailPattern", query: { id: pattern.id } });
        },
}
}
</script>

<style scoped>
.pattern-card{
    display: flex;
    flex-direction: column;
    max-width: 15em;
    max-height: 23em;
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
.pattern-title{
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
.filter{
    font-weight: bold;
    display:flex;
    justify-content: flex-end;
    padding-right: 5em;
}
.fa-angle-down:before {
    margin: 0.7em;
}
</style>