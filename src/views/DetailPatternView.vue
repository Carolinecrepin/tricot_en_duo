<template>
    <div>
        <div class="patron-detail">
            <div class="picture">
                <img v-bind:src="detailPatterns.picture">
            </div>
            <div class="modele-card">
                <h2 class="essential-informations">{{detailPatterns.title}}</h2>
                <h3 class="essential-informations">Niveau: {{detailPatterns.level}}</h3>
                <p class="essential-informations">Prix:{{detailPatterns.price}}€</p>
                <b><p class="essential-informations">Achetez ce modèle</p></b>
                <h3 class="title">Matériels:</h3>
                <p></p>
                <h3 class="title">Composition:</h3>
                    <p class="detail">matière 100% coton</p>
                <h3 class="title">Description: </h3>
                    <p class="detail">{{detailPatterns.description}}</p>
                <h3 class="title">Points utilisés: </h3>
                    <p class="detail">{{detailPatterns.stitch}}</p>
                <router-link to="/tutorials" class="link">Retrouvez tous nos tutos ici</router-link>
            </div>
        </div>
        <button class="return-btn" @click="$router.go(-1)">Retour</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            patterns:null,
            detailPatterns:{},
            wools:{},
        }
    },
    async mounted(){
        await this.getPatternbyPatterns();
    },
    methods: {
        async getPatternbyPatterns() {
            const response = await fetch(`https://127.0.0.1:8000/api/patterns/${this.$route.query.id}`,{
                headers:{
                    accept: 'application/json'
                }
            });
            const detailPatterns = await response.json();
            this.detailPatterns = detailPatterns;
        },
    }
}
</script>

<style scoped>
.patron-detail{
    display: flex;
    flex-direction: row;
    padding:1em;
}
.modele-card{
    display: flex;
    flex-direction:column;
    background-color:#F4E6E2;
    border-radius:10px;
    margin:1em;
    padding:1em;
    max-width: 60em;
    text-align: left;
    padding-left: 2em;
}
.return-btn{
    display: flex;
    justify-content: center;
    align-items:center;
    width:10em;
    height: 3em;
    margin:1em;
    background-color: #D3BBB4;
    border-radius: 10px;
    border:none;
    color:white;
    font-weight: bolder;
}
.link{
    color: red;
    font-weight: bolder;
}
.title{
    text-decoration: underline;
}
.detail{
    padding-left: 1.5em;
}
.picture{
    display: flex;
    justify-content: center;
    align-self: center;
    max-width: 80%;
    max-height: 80%;
}
.essential-informations{
    display: flex;
    justify-content: center;
    align-self: center;
    line-height:50%
}
</style>