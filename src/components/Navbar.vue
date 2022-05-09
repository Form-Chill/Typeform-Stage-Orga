<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light pt-3">
      <div class="container-fluid">
      <img class="logo pb-2" width="100" height="90" src="./assets/logo.png">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-light pb-3 ps-4" aria-current="page" href="#">Sondages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">A propos</a>
            </li>
          </ul>
          <form class="d-flex pb-3">
           <button class="btn btn-light me-2" type="submit">Connexion</button>
           <button class="btn btn-success" type="submit">Inscription</button>
          </form>
        </div>
      </div>
    </nav>
    
    </template>
<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),   url(./assets/Montserrat-Medium.ttf) format("truetype");}

.navbar {
  background-color: #022C4F !important;
  font-family: "Montserrat";
  font-size: large;
}
p {
  color: black;
}
h5{
  color: black;
}
</style>
