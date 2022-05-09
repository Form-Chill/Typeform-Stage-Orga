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
  <router-view></router-view>
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
</style>
