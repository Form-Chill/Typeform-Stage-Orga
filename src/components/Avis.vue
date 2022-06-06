<script>
export default {
  props: {
    text:"",
    name:""
  }
}


</script>



<template>
<div id="avis">

<div class="card w-50 blue">
  <div class="card-body">
      <div class="row">

    <span class="dot col-2 position-absolute top-0 start-0 translate-middle">
     <!-- <img class="rounded-circle" width="70" height="70" > -->
    </span>
    <h5 class="card-title col text-light" style="text-align: center;">{{this.name}}</h5>

    </div>

    <div class="card w-100 blue-bis ">
        <div class="card-body">
            <p class="card-text text-light ">{{this.text}}</p>
        </div>
    </div>

    </div>
</div>
</div>


</template>


<style>

.dot {
  height: 4em;
  width: 4em;
  display: hidden;
  border-radius: 50%;
  display: inline-block;
}

#avis{
display: flex;
/* text-align: center; */
justify-content: center;
padding-bottom: 2%;
}

</style>