<script>


</script>


<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
     <router-link to="/"> <a id="titre" class="text-decoration-none navbar-brand text-white fw-bold" href="#">
       <img class="logo" width="65" height="55" src="../assets/Icon.png">
       Form&Chill
      </a></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active text-light ps-4">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wip" class="nav-link active text-light ps-4">Sondages</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link active text-light  ps-4">A propos</router-link>
            </li>
          </ul>
          <form class="d-flex">
            
           <router-link to="/login"><button class="btn btn-outline-light me-2" type="submit">Connexion</button></router-link>
           <router-link to="/signin"><button class="btn btn-success" type="submit">Inscription</button></router-link>
          </form>
        </div>
      </div>
  </nav>
  </template>

<style>
.navbar {
  background-color: #022C4F !important;
  font-family: "Montserrat";
  /* font-size: large; */
}
</style>
