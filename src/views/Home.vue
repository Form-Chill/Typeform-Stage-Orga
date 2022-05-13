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
<Navbar></Navbar>
 
    <div id="container">
      <div id="text">
        <h1 class="display-2 fw-bold">Demandez l'avis de vos clients avec style.</h1>
        
        <h6>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
        </h6>
        
        <router-link to="/sondages">
        <button id="pollCreate" type="button" class="btn btn-primary btn-lg shadow-sm">
            Créer un sondage
        </button>
        </router-link>
      </div>
        <img src="../assets/imgAccueil.jpg" alt="image Accueil" id="imgAccueil" class="img-fluid"/>
    </div>
    <br>
    <Carousel></Carousel>
    <br>
    
    <div id="container">
      <div class="row"> 
        <div class="col-sm-12 col-md-6">  
          <h3 class="fw-bold">Un produit simple à prendre en main.</h3><br>
          <p>Form&Chill est un produit capable d'être utilisé par n'importe qui. Nous avons conçu un produit ergonomique et polyvalent pouvant être utilisé par tous.</p>
        </div>
        <div class=" col-sm-12 col-md-6">  
          <img class="rounded img-fluid center"  src="../assets/imgAccueil1.jpg" />
        </div>
      </div>
    </div>
    <br>
  
    <h3 style="text-align: center;">Ils nous recommandent(nous sommes si forts lol)</h3>
    <Avis></Avis>
    <br>
    <Avis></Avis>
    <br>

    <Footer></Footer>
</template>


<style>

#text {
  margin-right: 10%;
}

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
    padding-top: 1%;
  width: 45%;
  height: 45%;
  margin-right: -2%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>
