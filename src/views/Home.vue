<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
    export default {
    components: { Navbar, Footer }
}

</script>


<template>
<Navbar></Navbar>
    <div class="container">
        <h1>Demandez l'avis de vos clients avec style.</h1>
        <p>
            Créez simplement des sondages polyvalents et accessibles à tous. Form&Chill est un formidable outil vous permettant de booster votre productivité.
        </p>
        <button class="btn">
            Créer un sondage
        </button>

        <img src="../assets/imgAccueil.jpg" alt="image Accueil"/>
    </div>
    
    
    <Footer></Footer>
</template>
