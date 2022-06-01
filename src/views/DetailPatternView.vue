<template>
    <div>
        <div class="patron-detail">
            <div>
                <img v-bind:src="detailPatterns.picture">
            </div>
            <div class="modele-card">
                <h2>{{detailPatterns.title}}</h2>
                <h3>Niveau: {{detailPatterns.level}}</h3>
                <p>Prix:{{detailPatterns.price}}</p>
                <h4>Matériels:</h4>
                <p></p>
                <h4>Composition:</h4>
                <p>matière 100% coton</p>
                <h4>Description: </h4>
                <p>{{detailPatterns.description}}</p>
                <h4>Points utilisés: </h4>
                <p>{{detailPatterns.stitch}}</p>
                <p class="link">retrouvez tous nos tutos ici</p>
            </div>
        </div>
        <button class="return-btn">Retour</button>
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
    justify-content: space-between;
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
</style>