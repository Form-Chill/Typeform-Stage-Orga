<template>
    <div class="container top-50 start-50">
      <div class="block text-white">
        <h1 id="title">Cette page est en cours de construction !</h1>
        <p id="text">
            Notre site web est encore en bêta, <br> vous ne devriez pas être là à nous observer en train de travailler !
        </p>
        <router-link to="/">
          <button type="button" class="btn btn-light btn-lg">
            Retour à l'accueil
        </button>
        </router-link>
        
      </div>

      <div id="img" class="block">
        <img id="wip" src="../assets/imgWip.png" alt="image wip"/>
      </div>

    </div>
</template>


<style>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px #fff; */
  margin: 0 auto;
  background-color: #022C4F;
}

#wip {
  height: 60%;
  width: 60%;
}

button {
  color: #022C4F;
  font-weight: bold;
}

</style>
