<template>
    <div class="footer">
        <div class="cgv">
            <router-link to="/CGV" class="cgv">CGV</router-link>
            <router-link to="/terms-of-use" class="cgv">Mentions Légales</router-link>
            <router-link to="/personal-data" class="cgv">Données personnelles</router-link>    
        </div>
        <div class="icon-group">
            <img src="@/assets/icon-instagram.png" alt="instagram" class="icon">
            <img src="@/assets/icon-facebook.png" alt="facebook" class="icon">
            <img src="@/assets/icon-etsy.png" alt="etsy" class="icon">
        </div>
        <div class="contact">
            <p>Contactez-nous</p>
            <img src="@/assets/icon-enveloppe.png" alt="contact" class="icon">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    background-color: #D3BBB4;
    justify-content: space-evenly;
}
.icon{
 height: 50px;
 margin: 0.5em;
}
.contact{
    display: flex;
    flex-direction: row;
    color:white;
    font-weight: bolder;
    padding: 1em;
    align-items: end;
}
.icon-group{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em;
}
.cgv{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding:1em;
    color: white;
    font-weight: bolder;
    text-decoration: none;
}
</style>