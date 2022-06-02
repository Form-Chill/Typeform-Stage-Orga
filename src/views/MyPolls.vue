<script>
import Poll from "../components/Poll.vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseDb.js";

var uid;
var auth;
var name;

export default {
  components: { Poll },
  data() {
    return {
      identifie: "",
      uid : "",
    };
  },
  created() {
    auth = getAuth();
    console.log("name data:", this.identifie);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
        this.uid = user.uid;
        this.recupName();
        console.log("uid data 3:", this.uid);
      } else {
        this.loggedIn = false;
      }
      console.log("name data:", this.identifie);
    });
    console.log("name data:", this.identifie);
  },
  methods: {
    async recupName() {
      const docRef = doc(db, "users", this.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        this.identifie = await docSnap.data().name;
        //this.firstName = docSnap.data().firstName;
        console.log("name data 2:", docSnap.data().name);
        console.log("name data 1:", this.identifie);
        return this.identifie;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
  },

  //console.log("name data:", data.name);
};
</script>


<template>
  <Navbar />
  <br />

  <h1 class="title-1 fw-bold" style="text-align: center">
    Mes sondages {{ this.identifie }}
  </h1>
  <br />

  <div class="MyPolls">
    <div class="row row-cols-4">
      <Poll
        isMarketplace="false"
        :uidIdentifie="uid"
        class="col ms-3"
      ></Poll>
    </div>
  </div>

  <Footer class="mt-4" />
</template>

<style>
.MyPolls {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>