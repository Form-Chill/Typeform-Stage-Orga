<script>
import Poll from "../components/Poll.vue";

export default {
  components: { Poll },
};
</script>


<template>
  <Navbar />

  <div class="MarketplaceVue">
  <br />
  <h2 class="fw-bold txt-blue" style="text-align: center">Rechercher un sondage (WIP) :</h2>

  <br />

  <div class="input-group mb-3 px-5">
    <input
      type="text"
      class="form-control"
      placeholder="Rechercher un sondage (WIP)"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <button class="btn btn-primary" type="button" id="button-addon2">
      Rechercher
    </button>
  </div>
  <br />
  <!-- Afficher les sondages en fonction de la recherche -->

  <div class="container-lg OurPolls">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <Poll isMarketplace="true" uidIdentifie=""></Poll>
    </div>
  </div>

  <br />
  </div>
  <Footer />
</template>

<style>
.OurPolls {
  display: flex;
  text-align: center;
  justify-content: center;
}


.MarketplaceVue{
  padding-bottom: 15%;
}
</style>