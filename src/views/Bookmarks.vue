<script>

import { getDoc,doc, deleteField,updateDoc } from 'firebase/firestore';
import Poll from '../components/Poll.vue';
import { db } from '../firebaseDb';

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { ref } from 'vue';
import Popper from "vue3-popper";

export default {
    components: { Poll,Popper },
    data(){
        return{
        bookmarks: [],
        bookmarksID: [],
        uid:""
        }
    },
    created(){
        const auth = getAuth();
       
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.uid = user.uid;
            this.getFavorites(this.uid);
          
        } else {
            console.log("No one connected !");
        }
        });
    },
    methods:{
        async getFavorites(uid){
            const docRef = doc(db,"users",uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.bookmarksID = docSnap.data().bookmarks;
            } else {
                console.log("No such document!");
            }

            this.bookmarksID.forEach(async element => {
                const docRef2 = doc(db,"polls",element);
                const docSnap2 = await getDoc(docRef2);
                if (docSnap.exists()) {
                    const object = Object.assign(docSnap2.data(),{id : element,favourite: ref(true),url : "localhost:3000/answer?id=" + element });
                    this.bookmarks.push(object);
                    console.log("Document data2:",this.bookmarks[0]); }
                else {
                    console.log("No such document! 2");
                } 
            });        
        },

        async putFavourite(index){
            this.bookmarksID.push(this.bookmarks[index].id);
            const docRef2 = doc(db,"users",this.uid);
              await updateDoc(docRef2,{
                  bookmarks : this.bookmarksID
              });
        },

        async removeFavourite(index){
            this.bookmarksID = this.bookmarksID.filter(data => data != this.bookmarks[index].id);
            const docRef2 = doc(db,"users",this.uid);
            await updateDoc(docRef2,{bookmarks : this.bookmarksID});
        },

        setFavourite(index) {
            if (this.bookmarks[index].favourite == false) {
                this.bookmarks[index].favourite  = true;
                this.putFavourite(index)
            } else {
                this.bookmarks[index].favourite  = false;
                this.removeFavourite(index);
            }
        },
    }
}





</script>


<template>
    <Navbar></Navbar>
    <br>

    <h1 class="title-1 fw-bold txt-blue" style="text-align: center;">Mes favoris</h1>
    <br>

    <div class="Bookmarks">

    <div v-if="bookmarks.length == 0" > <h1 class="title-1 fw-bold txt-blue" style="text-align: center;">Pas de favoris enregistré</h1></div>

     

<div  v-else class="container-lg ">
    <div class="row row-cols-4 ">
        <div id= "favoris"  class="card col col ms-3"
            style="width: 300px" v-for="(item,index) in this.bookmarks">

            <!-- <Poll v-bind="item" class="col ms-3"></Poll> -->
                <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ description }}</p>
            <p class="card-text">
                <small class="text-muted">{{ update }}</small>
            </p>
            <div id="icons" style="display: flex; float: right">
                <!-- Faire fonctionner les popovers -->

                <div>
                <Popper
                    :content="'Partagez le sondage avec ce lien: ' + item.url"
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

                <div v-if="item.favourite">
                <svg
                    @click="setFavourite(index)"
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

                

                <div v-else>
                <svg
                    @click="setFavourite(index)"
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
            </div>
            </div>
            
        </div>


       
        
        

    </div>
</div>
</div>
    
    <!-- <button @click="test()">test </button> -->
    
    <Footer class= "mt-4"></Footer>

</template>


<style>
#favoris {
display: flex;
text-align: center;
justify-content: center;
}

.Bookmarks {
    padding-bottom: 30%;
}


</style>