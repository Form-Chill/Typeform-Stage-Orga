<script>

import { getAuth, onAuthStateChanged } from "@firebase/auth";

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

var lower, upper, nbChars, specialChar, number, activeBtn = false;


export default {
    data() {
        return {
            email:"",
            firstname:"",
            name:"",
            phone:"",
            actualPassword:"",
            newPassword:"",
            confirmPassword:"",
            message:"",
        }
    },
    methods: {
        verifPassword() {
            if (this.newPassword.length >= 7) {
                // console.log(this.nbChars);
                this.nbChars = true;
                this.activeBtn = true;
            } else {
                // console.log(this.nbChars);
                this.nbChars = false;
                this.activeBtn = false;
                // console.log(this.nbChars);
            }

            if (this.newPassword.match("^(?=.*[a-z])")) {
                this.lower = true;
                this.activeBtn = true;
            } else {
                this.lower = false;
                this.activeBtn = false;
            }

            if (this.newPassword.match("(?=.*[A-Z])")) {
                this.upper = true;
                this.activeBtn = true;
            } else {
                this.upper = false;
                this.activeBtn = false;
            }

            if (this.newPassword.match("(?=.*[0-9])")) {
                this.number = true;
                this.activeBtn = true;
            } else {
                this.number = false;
                this.activeBtn = false;
            }

            if (this.newPassword.match("(?=.*[!@#\$%\^&\*])")) {
                this.specialChar = true;
                this.activeBtn = true;
            } else {
                this.specialChar = false;
                this.activeBtn = false;
            }

            if (this.newPassword == "") {
                this.number = false;
                this.nbChars = false;
                this.activeBtn = false;
                this.upper = false;
                this.lower = false;
            }

        },
        changePassword() {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            if (this.upper && this.lower && this.specialChar && this.chars && this.number && this.newPassword.length >= 7 && this.newPassword == this.confirmPassword && this.actualPassword == currentUser.password) {
                updatePassword(currentUser, this.newPassword).then(() => {
                    console.log("Maj effectuée");
                    
                }).catch((error) => {
                    console.log(error);
                    this.message = "Les critères n'ont pas été respecté ou les mots de passe ne correspondent pas !"
                });
            }
        },
    }, 
    created() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                this.email = user.email;
                this.actualPassword = user.password;
                this.name = user.displayName;
            } else {
                // User is signed out
                // ...
            }
            });
        }
}





</script>

<template>
    <Navbar />
    <br>
    <h1 style="text-align: center;" class="title-1 fw-bold">Mon profil</h1>

<br>
    <div class="container-fluid">
        <div class="d-flex">
            <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-Infos-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Infos" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Mes informations</button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Mot de passe</button>
            
            </div> 
                <div class="d-flex" style="height: 200px;">
                    <div class="vr"></div>
                </div> 
            </div>
        
        <div class="d-flex mx-3">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active " id="v-pills-Infos" role="tabpanel" aria-labelledby="v-pills-Infos-tab" tabindex="0">
                    
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingEmail" v-model="email">
                        <label for="floatingInput">Adresse Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingName" v-model="name">
                        <label for="floatingPassword">Nom</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingFName" v-model="firstname">
                        <label for="floatingPassword">Prénom</label>
                    </div>

                    <button type="button" class="btn btn-primary btn-sm disabled">Sauvegarder</button>
                </div>



                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                    <h5 style="text-align: center;">Changer régulièrement votre mot de passe permet de sécuriser votre compte.</h5>
                    <br>
                    <div class="form-floating mb-4">
                        <input class="form-control" id="floatingPassword" v-model="actualPassword">
                        <label for="floatingPassword">Mot de passe actuel</label>
                    </div>
                    <div class="form-floating mb-1">
                        <input @keyup="verifPassword" class="form-control" id="floatingNewPassword" v-model="newPassword">
                        <label for="floatingPassword">Nouveau mot de passe</label>
                    </div>

                    <span class="badge rounded-pill bg-success text-light" v-if="nbChars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        8 caractères minimum
                    </span>
                    <span class="badge rounded-pill bg-light text-dark" v-else>8 caractères minimum</span>
                    <span class="badge rounded-pill bg-success text-light" v-if="upper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        1 majuscule
                    </span>
                    <span class="badge rounded-pill bg-light text-dark" v-else>1 majuscule</span>
                    <span class="badge rounded-pill bg-success text-light" v-if="lower">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>
                        1 minuscule
                    </span>
                    <span class="badge rounded-pill bg-light text-dark" v-else>1 minuscule</span>
                    <span class="badge rounded-pill bg-success text-light" v-if="number">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    1 chiffre
                    </span>
                    <span class="badge rounded-pill bg-light text-dark" v-else>1 chiffre</span>
                    <span class="badge rounded-pill bg-success text-light" v-if="specialChar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                        1 caractère spécial
                    </span>
                    <span class="badge rounded-pill bg-light text-dark" v-else>1 caractère spécial</span>
                    <br>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingNewPassword" v-model="confirmPassword">
                        <label for="floatingPassword">Confirmez votre mot de passe</label>
                    </div>

                    <button @click="changePassword" type="button" class="btn btn-primary btn-sm" id="btnSauv" v-if="activeBtn">Sauvegarder</button>
                    <button type="button" class="btn btn-primary btn-sm disabled" id="btnSauv" v-else>Sauvegarder</button>

                    <p class="text-danger">{{message}}</p>
                </div>
                <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
            </div>
        </div>
    </div>
        
        
    </div>

<br>
    <Footer />

</template>


<style>

</style>