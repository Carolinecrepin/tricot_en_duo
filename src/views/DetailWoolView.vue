<template>
    <div>
        <div class="wool-detail">
            <div class="picture">
                <img v-bind:src="detailWools.picture">
                <p>Retrouvez tous nos modèles tricotés avec la qualité {{detailWools.name}}</p>
            </div>
            <div class="wool-card">
                <h2 class="essential-informations">{{detailWools.name}}</h2>
                <p class="essential-informations">{{detailWools.price}}€ la pelote</p>
                <p class="essential-informations">Couleur: {{detailWools.color}}</p>
                <p class="essential-informations">quantité: </p>
                <input type="quantity" id="quantity" name="quantity" class="quantity"
                min="1" max="100">
                <button class="btn">Ajouter au panier</button>
                <h3 class="title">Taille d'aiguilles:</h3>
                    <p class="detail">n°{{detailWools.sizeNeedle}}</p>
                <h3 class="title">couleurs :</h3>
                    <p class="detail">{{detailWools.color}}</p>
                <h3 class="title">Composition:</h3>
                    <p class="detail">{{detailWools.material}}</p>
                <h3 class="title">Description:</h3>
                    <p class="detail">{{detailWools.description}}</p>
                <h3 class="title">Entretien:</h3>
                    <p class="detail">{{detailWools.maintenance}}</p>
            </div>
        </div>
        <button class="return-btn" @click="$router.go(-1)">Retour</button>
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
.detail{
    padding-left: 1.5em;
}
.quantity{
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-self: center;
}
</style>