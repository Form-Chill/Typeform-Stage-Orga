<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Avis from "./components/Avis.vue";
    export default {
    components: { Navbar, Footer, Carousel, Avis }
}

</script>

<template>
  <router-view></router-view>
</template>


<style>

html{
  height: 100%;
  width: 100%;
  vertical-align: baseline;
  overflow: auto;

  min-width: 00px;
}


#text {
  color:#022C4F !important;
  margin-right: 5%;
}

*{
  font-family: "Montserrat";
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

.blue{
    background-color: #022C4F;
}

.txt-blue{
  color: #022C4F;
}

.blue-bis{
    background-color: #627a8f;
}

.btn-blue{
  background-color: #022C4F;
  color: white;
}

.btn-blue:hover{
  background-color: #627a8f;
  color: white;
}


</style>
