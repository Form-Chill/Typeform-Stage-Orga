<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Avis from "../components/Avis.vue";
    export default {
    components: { Navbar, Footer,Carousel,Avis }
}

</script>

<template>
<br>
    <div id="container">
      <div id="text">
        <h1 class="display-2 bold">Demandez l'avis de vos clients avec style.</h1>
        <h5>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
        </h5>
        <router-link to="/sondages">
        <button id="pollCreate" type="button" class="btn btn-primary shadow-sm">
            Créer un sondage
        </button>
        </router-link>
      </div>
        <img src="../assets/imgAccueil.jpg" alt="image Accueil" id="imgAccueil"/>
    </div>

    <Carousel></Carousel>
    <h1>Texte de presentation du produit (WIP)</h1>


    <h1 style="text-align: center;">Ils nous recommandent(nous sommes si forts lol)</h1>
    <Avis ></Avis>
    <Avis></Avis>
</template>


<style>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50%;
}

#pollCreate {
  background-color: #022C4F !important;
  border: #022C4F !important;
}

#imgAccueil{
  width: 50%;
  height: 50%;
}


</style>
