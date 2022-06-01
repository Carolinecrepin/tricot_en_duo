<template>
    <div>
        <h2>Connexion</h2>
        <div class="login-card">
            <div class="member">
                <h3>J'ai déjà un compte</h3>
                <p>Identifiez-vous</p>
                <label for="email"></label>
                <input type="text" name="email" id="email" placeholder="Email *">
                
                <label for="password"></label>
                <input type="text" name="password" id="password" placeholder="Mot de passe *">
                <p>Mot de passe oublié?</p>
                <button class="btn">Me connecter</button>
            </div>
            <div class="not-member">
                <h3>Nouveau sur le site</h3>
                <p>Créez votre compte en quelques clics</p>
                <input type="text" name="Firstname" id="Firstname" placeholder="Votre Prénom *">
                <input type="text" name="lastname" id="lastname" placeholder="Votre Nom *">
                <input type="text" name="email" id="email" placeholder="Votre adresse Email *">
                <input type="text" name="password" id="password" placeholder="Ajouter un mot de passe *">
                <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirmer votre mot de passe *">
                <button class="btn">M'inscrire</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-card{
    display: flex;
    flex-direction: row;
    background-color: #EEE4E1;
    justify-content: space-around;
    margin: 2em;
}
.member , .not-member {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em;
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