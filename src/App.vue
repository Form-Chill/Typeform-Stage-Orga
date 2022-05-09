<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Avis from "./components/Avis.vue";
    export default {
    components: { Navbar, Footer,Carousel,Avis }
}

</script>

<template>

<Navbar></Navbar>
<br>
    <div id="container">
      <div id="text">
        <h1 class="display-2 bold">Demandez l'avis de vos clients avec style.</h1>
        <h5>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
        </h5>
        <button id="pollCreate" type="button" class="btn btn-primary shadow-sm">
            Créer un sondage
        </button>
      </div>
        <img src="./assets/imgAccueil.jpg" alt="image Accueil" id="imgAccueil"/>
    </div>

    <Carousel></Carousel>

    <Avis></Avis>

    <Avis></Avis>
    
    <Footer></Footer>
    
</template>


<style>
body {
  background-color: #fff !important;
  color: #022C4F !important;
}

#text {
  color:#022C4F !important;
  margin-right: 5%;
}

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),   url(./assets/Montserrat-Medium.ttf) format("truetype");}

#container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
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
