<script>
import Navbar from '../components/Navbar.vue';
import { getAuth, onAuthStateChanged} from "@firebase/auth";
import router from '../router';

export default {
    components: { Navbar },
    created(){
        let auth = getAuth();
        onAuthStateChanged(auth,(user) =>{
            if (user) {
            
            
            } else {
                console.log("No one connected !");
                router.push("/login")
            }
        });

        
    }
}
 
</script>

<template>
<Navbar></Navbar>
<br>
    <h1 class="text-center fw-bold">Tableau de bord</h1>
    <br>
    <div class="container-lg" id="buttons">
        <div class="row justify-content-center">

        <div class="col-lg-2 col-sm-4">
            <router-link to="/PollCreate"><button class="shadow-sm btn btn-light" id="btns">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#022C4F" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                <br>
                <h6 class="fw-bold">Créer un sondage</h6>
            </button>
            </router-link>
        </div>
        
        <div class="col-lg-2 col-sm-4" id="MyPolls">
            <router-link to="/MyPolls">
                <button class="shadow-sm btn btn-light" id="btns">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="grey" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                    </svg>
                <br>
                    <h6 class="fw-bold">Mes sondages</h6>
                </button>
            </router-link>
        </div>
        
        <div class="col-lg-2 col-sm-4">
            <router-link to="/Bookmarks">
                <button class="shadow-sm btn btn-light" id="btns">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        <br>
                        <h6 class="fw-bold">Mes favoris</h6>
                    </button>
            </router-link>
        </div>
        
        <div class="col-lg-2 col-sm-4" id="profile">
            <router-link to="/Profile">
                <button class="shadow-sm btn btn-light" id="btns">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#022C4F" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                    </svg>
                <br>
                    <h6 class="fw-bold">Mon profil</h6>
                </button>
            </router-link>
        </div>    
    </div>
    </div>
<Footer class="mt-4"></Footer>

</template>


<style>

#btns {
    width: 175px; 
    height: 120px;
    
}

/* #MyPolls {
 position: relative;
 left: 5%;
} */

h6 {
    color: #022C4F;
}
/* #profile { 
    position: relative;
    right: 5%;
} */

/* #buttons {
    margin-left: 50%;
    margin-right: 50%;
} */
</style>