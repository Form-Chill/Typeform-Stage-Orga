<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
components: { Navbar, Footer }
}

</script>


<template>
<h1 style="text-align:center"> Inscription</h1>

    <form>
        <div class="mb-3">
            <label for="InputEmail" class="form-label">Adresse Email</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="InputPassword" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="InputPassword">
        </div>
       
        <button type="submit" class="btn btn-success" >Se connecter</button>
    </form>

</template>


<style>


</style>
