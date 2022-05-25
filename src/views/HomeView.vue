<template>
  <div class="home">
      <div class="citation">
            <div class="citation-card">
                  <p class="text-citation">
                    Si vous n’accomplissez qu’une seule chose aujourd’hui,
                    <br>assurez-vous qu’elle concerne 
                    <br>la laine ! 
                  </p>
            </div>
      </div>
      <div class="about">
        <div class="resume-about">
          <p>
            Bonjour et bienvenue sur Tricot en Duo
            <br>Ce site est né d’une collaboration de deux passionnées
            <br>de tricot, qui voulaient faire profiter de leurs savoirs
            <br>et leur passions.
            <br>Sur ce site vous y retrouverez des modèles (gratuit et payant),
            <br>des tutos images et vidéo, une partie e-commerce pour acheter tout
            <br>le necessaire pour développer votre créativité
            <br>Bonne visite à tous ! 
          </p>
        </div>
        <div class="illustration-tricot-en-duo">
            <div class="illustration">
              <p>illutration a definir</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  },
};
</script>

<style scoped>
.citation{
  display:flex;
  flex-direction: row;
  width:100%;
  height: 25em;
  background-color: #EEE4E1;
  justify-content: flex-end;
  padding-right: 2em;
}
.citation-card{
  display: flex;
  align-self: center;
  background-color: #FFEFEB;
  width: 40em;
  height: 15em;
  border-radius: 20px;
  box-shadow: inherit;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.text-citation{
  font-size: 1.5em;
  align-self: center;
  margin: 1em;
}
.resume-about{
  text-align: right;
  margin: 2em;
  padding:0.5em;
}
.illustration{
  display: flex;
  flex-direction: row;
  background-color: rgb(170, 170, 170);
  width: 40em;
  height: 20em;
  padding: 2em;
  margin: 2em;
}
.about{
  display: flex;
  flex-direction: row;
  margin:2em;
}
</style>
