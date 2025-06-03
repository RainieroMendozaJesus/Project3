<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Sumadora</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sumadora</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        
      </div>
      
      <div id="resultado">
        <h3>
          Resultado: {{ resultado }}
        </h3>
      </div>

      <ion-list>
          <ion-item>
            <ion-input 
              v-model="numero1" 
              type="number"
              label="Numero" 
              label-placement="floating" 
              placeholder="Escriba el numero">
            </ion-input>
          </ion-item>
      </ion-list>

      <ion-list>
          <ion-item>
            <ion-input 
              v-model="numero2" 
              type="number"
              label="Numero" 
              label-placement="floating" 
              placeholder="Escriba el numero">
            </ion-input>
          </ion-item>
      </ion-list>
      
      <ion-button expand="block" @click="mostrarSuma" >Sumar</ion-button>
      
      
      

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonItem, IonButtons, IonInput, IonList, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue'
  const numero1 = ref<number>();
  const numero2 = ref<number>();

  const resultado = ref<number>();

  const mostrarSuma = () => {
      const num1 = Number(numero1.value) || 0;
      const num2 = Number(numero2.value) || 0;
      resultado.value = num1 + num2;
  };

</script>

<style scoped>
#container {
  padding-top: 50px;
  padding-left: 15px;

}


#resultado {
  display: grid;
  place-items: center; 
  height: 5vh;
}

</style>
