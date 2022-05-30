<script>
import Popper from "vue3-popper";
import { firebaseApp, db } from "../firebaseDb";
import { collection, addDoc, getDoc, getDocs, doc } from "firebase/firestore";

var favourite = false;
var url = "";

export default {
  components: {
    Popper,
  },
  data() {
    return {
      items:[
        { title: "" },
        { description: "" },
        { update: "" },
        { imageSrc: "" },
        { favourite: "" },
        { url: "" },
      ],
    };
  },
  created() {
      this.getPollsData();
  },
  methods: {
    putInFavourite() {
      if (this.favourite == false) {
        this.favourite = true;
      } else {
        this.favourite = false;
      }
    },
    getPollsData(){
        getDoc(doc(db, "polls/f8ZZafzFd6gemXM9MgVQ")).then((docSnap) => {
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        this.items = docSnap.data();
        //console.log("Items data:", this.items);
        //console.log("Items data:", this.items.title);
      } else {
        console.log("No such document!");
      }
    });
    }
  },
};
</script>



<template>
  <div class="card col" style="width: 300px">
    <!-- <img src="{{imageSrc}}" class="card-img-top" alt=""/> Mettre un aperçu du sondage -->

    <div class="card-body">
      <h5 class="card-title">{{ this.items.title }}</h5>
      <p class="card-text">{{ this.items.description }}</p>
      <p class="card-text">
        <small class="text-muted">{{ this.items.update }}</small>
      </p>
      <div id="icons" style="display: flex; float: right">
        <!-- Faire fonctionner les popovers -->

        <div>
          <Popper
            content="Partagez le sondage avec ce lien : {{url}}"
            placement="right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-share-fill"
              data-bs-toggle="popover"
              title="Popover title"
              data-bs-placement="right"
              data-bs-content="And here's some amazing content. It's very engaging. Right?"
              viewBox="0 0 20 20"
            >
              <path
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
              />
            </svg>
          </Popper>
        </div>

        <div v-if="!favourite">
          <svg
            @click="putInFavourite"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-heart"
            viewBox="0 0 20 20"
          >
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
            />
          </svg>
        </div>

        <div v-else>
          <svg
            @click="putInFavourite"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-heart-fill"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
:root {
  --popper-theme-background-color: #ffffff;
  --popper-theme-background-color-hover: #ffffff;
  --popper-theme-text-color: #333333;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 24px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>