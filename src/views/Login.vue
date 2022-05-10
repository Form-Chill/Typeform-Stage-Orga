<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    components: { Navbar, Footer }
}

</script>


<template>
<Navbar></Navbar>
<br>
<img class="rounded mx-auto d-block" src="../assets/Icon.png" alt="Icone"/>
<br>
<h1 style="text-align:center" class="fw-bold">Connexion</h1>
<br>

    <form class="needs-validation container-fluid px-5" novalidate>
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
            <label class="form-check-label" for="exampleCheck1">Se souvenir de mes identifiants</label>
        </div>
        <button type="submit" class="btn btn-success text-center" >Se connecter</button>  

    </form>
    <br>
    <Footer></Footer>
    
</template>


<style>


</style>
