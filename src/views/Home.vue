<script>

import Carousel from "../components/Carousel.vue";
import Avis from "../components/Avis.vue";
import router from "../router";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
    
  export default {
    components: { Carousel, Avis, },

    data() {
      return {
        loggedIn:false,
      }
    },

    created() {
      let auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
        
    });
    },

    methods: {
      btnSondage() {
        if (this.loggedIn == true) {
          router.push("/PollCreate");
        } else {
          router.push("/login");
        }
      }
    }
}

</script>

<template>
<Navbar/>
<br>

     <div id="container">

       <div class="row"> 

        <div class="col-sm-12 col-md-6 pt-2">  
           <h1 class="display-2 fw-bold">Demandez l'avis de vos clients avec style.</h1><br>
            <h6>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité. <br> N'attendez plus ! Créez un compte et lancez-vous dans la création de votre premier sondage !
            </h6><br>

       
        <button @click="btnSondage" id="pollCreate" type="button" class="btn btn-primary btn-lg shadow-sm">
            Créer un sondage
        </button>
        
        </div>

        <div class="col-sm-12 col-md-6">  
          <img class="img-fluid rounded center" src="../assets/imgAccueil.jpg" alt="image Accueil"/>
        </div>
         
      </div>
      
        
    </div>

    <br>




    <h2 class="fw-bold" style="text-align: center;">Ils nous recommandent :</h2>
    <br/>
      <div class="row justify-content-center" id="brands">
        <div class="col-3">
            <img class="img-fluid" src="../assets/BMW-Logo.png" width="270" height="150"/>
        </div>
                    
        <div class="col-3">
          <img class="img-fluid" src="../assets/logo_twitch.png" width="270" height="170"/>
        </div>
            
        <div class="col-3">
          <img class="img-fluid" src="../assets/logo-fnac.png" width="400" height="250" />                   
      </div>
    </div>
    <!-- <Carousel></Carousel> -->
    <br>
    
    <div id="container">
      <div class="row"> 
        <div class="col-sm-12 col-md-6 flex-shrink-0">  
          <div class="flex-grow-1 ms-3">
            <h2 class="fw-bold">Un produit simple à prendre en main.</h2><br>
          <h5>
            Form&Chill est un produit capable d'être utilisé par n'importe qui. Nous avons conçu un produit ergonomique et polyvalent pouvant être utilisé par tous.
            Nombre de nos clients sont satisfaits de notre produit et le recommandent vivement !
            <br> 
          </h5>
          </div>
          
        </div>
        <div class=" col-sm-12 col-md-6">  
          <img class="rounded center" src="../assets/imgAccueil1.jpg" width="70%" height="90%"/>
        </div>
      </div>
    </div>
    <br>
  
    <h3 style="text-align: center;" class="fw-bold"> Nos clients sont satisfaits à 95%</h3>
    <br>
    <div class="row justify-content-center">
      <div id="avis1" class="col-12">
      <Avis name="Julie" text="Form&Chill est un outil très puissant et pratique. Grâce à lui, j'ai pu augmenter ma productivité et créer des sondages rapidement et simplement."></Avis>
      </div>
      <br>
        <div class="col-12">
        <Avis name="Alex" text="J'aime beaucoup l'efficacité et surtout l'ergonomie de Form&Chill ! Je n'ai jamais utilisé un service aussi simple et pratique !"></Avis>
      </div>
    </div>
    
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
  margin-right: -2%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* #brands {
  padding-left: 20%;
  padding-right: 20%
} */

</style>
