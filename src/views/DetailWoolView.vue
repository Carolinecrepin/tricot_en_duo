<template>
    <div>
        <div class="wool-detail">
            <div>
                <img v-bind:src="detailWools.picture">
            </div>
            <div class="wool-card">
                <h2>{{detailWools.name}}</h2>
                <p>{{detailWools.price}}€ la pelote</p>
                <p>Couleur: {{detailWools.color}}</p>
                <p>quantité: </p>
                <button class="btn">Ajouter au panier</button>
                <p>Taille d'aiguilles: n°{{detailWools.sizeNeedle}}</p>
                <p>couleurs : {{detailWools.color}}</p>
                <h3>Composition:</h3>
                <p>{{detailWools.material}}</p>
                <h3>Description:</h3>
                <p>{{detailWools.description}}</p>
                <h3>Entretien:</h3>
                <p>{{detailWools.maintenance}}</p>
            </div>
        </div>
        <button class="return-btn">Retour</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            wools:null,
            detailWools:{},
        }
    },
    async mounted(){
        await this.getWoolbyWools();
    },
    methods: {
        async getWoolbyWools() {
            const response = await fetch(`https://127.0.0.1:8000/api/wool/${this.$route.query.id}`,{
                headers:{
                    accept: 'application/json'
                }
            });
            const detailWools = await response.json();
            console.log(detailWools)
            this.detailWools = detailWools;
        },

    }
}
</script>

<style scoped>
.wool-detail{
    display: flex;
    flex-direction: row;
    padding:1em;
}
.wool-card{
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