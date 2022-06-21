<script>
import Poll from "../components/Poll.vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { doc, getDoc, getDocs, query,collection,where, updateDoc,deleteDoc } from "firebase/firestore";
import { db } from "../firebaseDb.js";
import Popper from "vue3-popper";

export default {
  components: { Poll,Popper },
  data() {
    return {
      identifie: "",
      uid : "",
      myPolls : [],
      bookmarksID: [],
    };
  },
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.loggedIn = true;
        this.uid = user.uid;
        this.getBookmarkID();
        this.getMyPolls();
        console.log("uid data 3:", this.uid);
      } else {
        this.loggedIn = false;
      }
      console.log("name data:", this.identifie);
    });
    console.log("name data:", this.identifie);
  },
  methods: {
    async getMyPolls(){
      const myPollsRef = collection(db,"polls");
      const requete = query(myPollsRef,where("createur", "==", this.uid));
      const querySnapshot = await getDocs(requete);
      querySnapshot.forEach((doc) => {
        let favourite = this.bookmarksID.includes(doc.id)?true:false;
        this.myPolls.push(Object.assign(doc.data(),{id :doc.id, url : "localhost:3000/answer?id=" + doc.id,favourite : favourite,urlModify: "/PollModify?id=" + doc.id  }));
      });
    },

    async getBookmarkID(){
      const docRef = doc(db,"users",this.uid);
      const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.bookmarksID = docSnap.data().bookmarks;
          console.log("bookmarkID",this.bookmarksID  );
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    },

    async putFavourite(index){
      this.bookmarksID.push(this.myPolls[index].id);  
      const docRef2 = doc(db,"users",this.uid);
      await updateDoc(docRef2,{bookmarks : this.bookmarksID});
    },

    async removeFavourite(index){
      this.bookmarksID = this.bookmarksID.filter(data => data != this.myPolls[index].id);
      console.log(this.bookmarksID)
      const docRef2 = doc(db,"users",this.uid);
      await updateDoc(docRef2,{bookmarks : this.bookmarksID});
    },

    setFavourite(index) {
      if (this.myPolls[index].favourite == false) {
        this.myPolls[index].favourite  = true;
        this.putFavourite(index)
      } else {
        this.myPolls[index].favourite  = false;
        this.removeFavourite(index);
      }
    },

    async deletePoll(idPoll,index){
      this.myPolls.splice(index,1);
      await deleteDoc(doc(db,"polls",idPoll));
      

    }


  
    
  },
};
</script>


<template>
  <Navbar />
  <br />
  <h1 class="title-1 fw-bold txt-blue" style="text-align: center"> Mes sondages</h1>
  <br />

  <div class="container-lg MyPolls">


    <div v-if="myPolls.length == 0">
      <h1 class="title-1 fw-bold txt-blue" style="text-align: center;">Pas de sondages crée</h1>
    </div>
    <div v-else class="row row-cols-4">

      <div class="Poll card col col ms-3" v-for="(item,index) in this.myPolls" style="width: 300px">
        <div class="card-body">
          <button type="button" class="btn-close" data-bs-toggle="modal" :data-bs-target="'#modalSup' + index"
            aria-label="Close" style="float:right"></button>
            <br>
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ description }}</p>
          <p class="card-text">
            <small class="text-muted">{{ update }}</small>
          </p>
          <div id="icons" style="display: flex; float: right">
            <!-- Faire fonctionner les popovers -->

            <div class="mx-1">
              <Popper :content="'Partagez le sondage avec ce lien: ' + item.url" placement="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-share-fill" data-bs-toggle="popover" title="Popover title" data-bs-placement="right"
                  data-bs-content="And here's some amazing content. It's very engaging. Right?" viewBox="0 0 20 20">
                  <path
                    d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
              </Popper>
              <router-link :to="item.urlModify">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                  class="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </router-link>
            </div>

            <div v-if="item.favourite">
              <svg @click="setFavourite(index)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                class="bi bi-heart-fill" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>




            </div>



            <div v-else>
              <svg @click="setFavourite(index)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
                class="bi bi-heart" viewBox="0 0 20 20">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>

            </div>
          </div>


        </div>


        <!-- Modal suppression compte -->
        <div class="modal fade" :id="'modalSup' + index " tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Attention</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Êtes-vous réellement sûr de vouloir supprimer votre sondage ?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                  @click="deletePoll(item.id,index)">Supprimer</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>

  <Footer class="mt-4" />
</template>

<style>
.Poll {
  display: flex;
  text-align: center;
  justify-content: center;
 
}

.MyPolls {

  padding-bottom: 30%;
}


</style>