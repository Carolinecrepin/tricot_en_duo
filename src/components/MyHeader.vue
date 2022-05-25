<template>
    <div>
        <div class="navbar">
            <div>
            <!-- Just an image -->
                <div class="logo">
                    <img src="@/assets/logo.png" alt="Logo" class="logo">
                </div>
            </div>
            <nav class="navigation">
                <router-link to="/" class="nav-link">Accueil</router-link>
                <router-link to="/patterns" class="nav-link">Patrons</router-link>
                <router-link to="/materials" class="nav-link">Matériels</router-link>
                <router-link to="/tutorials" class="nav-link">Tutos</router-link>
                <div class="icon">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {}
</script>


<style scoped>
.logo{
    padding:0.7em;
}
.navbar{
    background-color: #D3BBB4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.navigation{
    display: flex;
    align-items: center;
    font-weight: bolder;
    color:white;
    opacity: 100%;
    justify-content: center;
}
.nav-link{
    padding:1em;
    margin:1em;
    color:white;
    text-decoration: none;
}
.icon{
    display: flex;
    flex-direction: row;
    margin:1em;
    padding:1em;
}
.fa-basket-shopping:before, .fa-shopping-basket:before{
    margin:1em;
}

</style>