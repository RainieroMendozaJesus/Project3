<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Página Inicial</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Página Inicial</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Autor de la App</strong>
        <p>Rainiero Mendoza de Jesus (2022-1079)</p>
      </div>


      <ion-img 
        src="public/assets/rai.jpg" 
        alt="Rainiero Mendoza De Jesus"
        id="foto-rai"></ion-img>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {IonImg , IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
</script>

<style scoped>
#container {
  padding-top: 100px;
  padding-left: 15px;
  
  
  transform: translateY(-50%);
}

#foto-rai{
  max-width: 200px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
