<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
components: { Navbar, Footer }
}

</script>


<template>
<br>
<h1 style="text-align:center"> Inscription</h1>

    <form class="needs-validation" novalidate>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" required>
            <label for="InputEmail">Adresse Email</label>
            <div class="invalid-feedback">
                L'adresse Email est incorrecte.
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe" required>
            <label for="InputPassword">Mot de passe</label>
            <div class="invalid-feedback">
                Le mot de passe est invalide.
            </div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Accepter les CGU</label>
        </div>
        <button type="submit" class="btn btn-success" >S'inscrire</button>  

    </form>

</template>


<style>


</style>