<script>

import Carousel from "../components/Carousel.vue";
import Avis from "../components/Avis.vue";
    
  export default {
    components: { Carousel, Avis, }
}

</script>

<template>
<Navbar/>
<br>

     <div id="container">

       <div class="row"> 

        <div class="col-sm-12 col-md-8">  
           <h1 class="display-2 fw-bold">Demandez l'avis de vos clients avec style.</h1><br>
            <h6>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
            </h6><br>

        <router-link to="/sondages">
        <button id="pollCreate" type="button" class="btn btn-primary btn-lg shadow-sm">
            Créer un sondage
        </button>
        </router-link>
        
        </div>

        <div class=" col-sm-12 col-md-4">  
          <img class="rounded img-fluid center" src="../assets/imgAccueil.jpg" alt="image Accueil" />
        </div>
         
      </div>
      
        
    </div>










    <br>
    <Carousel></Carousel>
    <br>
    
    <div id="container">
      <div class="row"> 
        <div class="col-sm-12 col-md-6">  
          <h3 class="fw-bold">Un produit simple à prendre en main.</h3><br>
          <p>Form&Chill est un produit capable d'être utilisé par n'importe qui. Nous avons conçu un produit ergonomique et polyvalent pouvant être utilisé par tous.
            <br> 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus nibh vitae posuere gravida. Sed pellentesque libero in consectetur vestibulum. Pellentesque at egestas metus, vel tincidunt diam. Sed tempus, dolor dignissim dictum aliquam, mi tortor luctus erat, vitae commodo quam lectus sed lorem. Donec imperdiet turpis et malesuada volutpat. Maecenas ante ligula, aliquet in elementum quis, gravida in lectus. In condimentum mollis enim, a convallis augue bibendum quis. Pellentesque placerat diam massa, ac pretium ipsum pharetra et. Suspendisse at erat eget risus mattis interdum in et sem. Pellentesque nec ante pulvinar, sagittis odio ut, accumsan turpis. Ut magna mauris, ullamcorper laoreet lobortis id, consequat sed purus. Duis sit amet nisi varius, blandit nibh a, aliquam urna. Mauris dapibus convallis viverra. Nullam rutrum ante eu urna facilisis, consectetur dapibus sem malesuada. Donec ut consectetur enim, vestibulum facilisis erat.

Suspendisse quis dolor maximus, hendrerit libero a, pellentesque mauris. Donec semper eros quis risus rutrum, quis fringilla velit tincidunt. Cras a neque felis. Etiam eleifend urna at magna blandit lobortis. Curabitur in est diam. Aliquam pellentesque augue vitae ex ornare vulputate. Proin nec posuere augue. Integer pharetra mollis velit eu cursus. Nullam eget dui fringilla, dictum augue et, tristique urna. Nunc mi ligula, fringilla eu risus sed, tempus mattis lacus. Mauris ut mauris mollis, vulputate mi vel, faucibus magna. Nulla aliquet sem at tortor ultrices sagittis.

Phasellus ullamcorper rhoncus arcu, et rhoncus velit porta et. 
          </p>
        </div>
        <div class=" col-sm-12 col-md-6">  
          <img class="rounded img-fluid center" src="../assets/imgAccueil1.jpg" />
        </div>
      </div>
    </div>
    <br>
  
    <h3 style="text-align: center;"> Ils nous recommandent( nous sommes si forts lol)</h3>
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
  margin-right: -2%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>
