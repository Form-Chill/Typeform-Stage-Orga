<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
    export default {
    components: { Navbar, Footer }
}

</script>


<template>
<Navbar></Navbar>
    <div class="container">
      <div id="text">
        <h1>Demandez l'avis de vos clients avec style.</h1>
        <p>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
        </p>
        <button id="pollCreate" type="button" class="btn btn-primary">
            Créer un sondage
        </button>
      </div>
        <img src="./assets/imgAccueil.jpg" alt="image Accueil"/>
    </div>
    
    <Footer></Footer>
    
</template>


<style>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

#pollCreate {
  background-color: #022C4F !important;
  border: #022C4F !important;
}

</style>
