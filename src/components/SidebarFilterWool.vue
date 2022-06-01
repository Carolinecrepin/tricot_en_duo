<template>
    <div>
        <div class="filter-item">
            <h2>Filtrer</h2>
            <p class="filter-title">Saison</p>
                <div>
                    <input type="checkbox" id="printemps-ete" name="printemps-été">
                    <label for="scales">Printemps/Eté</label>
                </div>
                <div>
                    <input type="checkbox" id="automne-hiver" name="automne-hiver">
                    <label for="scales">Automne/hiver</label>
                </div>
            <p class="filter-title">Couleur</p>
                <div>
                    <input type="checkbox" id="argent" name="argent">
                    <label for="scales">Argent</label>
                </div>
                <div>
                    <input type="checkbox" id="beige-ecru" name="beige-ecru">
                    <label for="scales">Beige-Ecru</label>
                </div>
                <div>
                    <input type="checkbox" id="blanc" name="blanc">
                    <label for="scales">Blanc</label>
                </div>
                <div>
                    <input type="checkbox" id="bleu" name="bleu">
                    <label for="scales">Bleu</label>
                </div>
                <div>
                    <input type="checkbox" id="bleu-marine" name="bleu-marine">
                    <label for="scales">Bleu marine</label>
                </div>
                <div>
                    <input type="checkbox" id="dore" name="dore">
                    <label for="scales">Doré</label>
                </div>
                <div>
                    <input type="checkbox" id="gris" name="gris">
                    <label for="scales">Gris</label>
                </div>
                <div>
                    <input type="checkbox" id="jaune" name="jaune">
                    <label for="scales">Jaune</label>
                </div>
                <div>
                    <input type="checkbox" id="marron" name="marron">
                    <label for="scales">Marron</label>
                </div>
                <div>
                    <input type="checkbox" id="multicolor" name="multicolor">
                    <label for="scales">Multicolor</label>
                </div>
                <div>
                    <input type="checkbox" id="noir" name="noir">
                    <label for="scales">Noir</label>
                </div>
                <div>
                    <input type="checkbox" id="orange" name="orange">
                    <label for="scales">Orange</label>
                </div>
                <div>
                    <input type="checkbox" id="rose" name="rose">
                    <label for="scales">Rose</label>
                </div>
                <div>
                    <input type="checkbox" id="rouge" name="rouge">
                    <label for="scales">Rouge</label>
                </div>
                <div>
                    <input type="checkbox" id="vert" name="vert">
                    <label for="scales">Vert</label>
                </div>
                <div>
                    <input type="checkbox" id="vert-kaki" name="vert-kaki">
                    <label for="scales">Vert-Kaki</label>
                </div>
                <div>
                    <input type="checkbox" id="violet" name="violet">
                    <label for="scales">Violet</label>
                </div>
            <p class="filter-title">Taille d'aiguilles</p>
                <div>
                    <input type="checkbox" id="2.5" name="2.5">
                    <label for="scales">2.5</label>
                </div>
                <div>
                    <input type="checkbox" id="3" name="3">
                    <label for="scales">3</label>
                </div>
                <div>
                    <input type="checkbox" id="3.5" name="3.5">
                    <label for="scales">3.5</label>
                </div>
                <div>
                    <input type="checkbox" id="4" name="4">
                    <label for="scales">4</label>
                </div>
                 <div>
                    <input type="checkbox" id="4.5" name="4.5">
                    <label for="scales">4.5</label>
                </div>
                <div>
                    <input type="checkbox" id="5" name="5">
                    <label for="scales">5</label>
                </div>
                <div>
                    <input type="checkbox" id="5.5" name="5.5">
                    <label for="scales">5.5</label>
                </div>
                <div>
                    <input type="checkbox" id="6" name="6">
                    <label for="scales">6</label>
                </div>
                <div>
                    <input type="checkbox" id="6.5" name="6.5">
                    <label for="scales">6.5</label>
                </div>
                <div>
                    <input type="checkbox" id="7" name="7">
                    <label for="scales">7</label>
                </div>
                <div>
                    <input type="checkbox" id="7.5" name="7.5">
                    <label for="scales">7.5</label>
                </div>
                <div>
                    <input type="checkbox" id="8" name="8">
                    <label for="scales">8</label>
                </div>
                <div>
                    <input type="checkbox" id="9" name="9">
                    <label for="scales">9</label>
                </div>
                <div>
                    <input type="checkbox" id="10" name="10">
                    <label for="scales">10</label>
                </div>
                <div>
                    <input type="checkbox" id="11" name="11">
                    <label for="scales">11</label>
                </div>
                <div>
                    <input type="checkbox" id="12" name="12">
                    <label for="scales">12</label>
                </div>

            <p class="filter-title">Composition</p>
            <p class="filter-title">Prix</p>
        </div>
    </div>
</template>

<style scoped>
.filter-item {
    display: flex;
    flex-direction: column;
    background-color: #EEE4E1;
    max-width: 20em;
    justify-content: flex-start;
    align-items: flex-start;
    padding:1.5em;
}
.filter-title {
    font-weight: bold;
    font-size: medium;
}
</style>