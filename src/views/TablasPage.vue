<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tablas de Multiplicar</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tablas de Multiplicar</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">Tablas de Multiplicar</strong>
      </div>

      <ion-list>
          <ion-item>
            <ion-input 
              v-model="numero" 
              type="number"
              label="Numero" 
              label-placement="floating" 
              placeholder="Escriba el numero">
            </ion-input>
          </ion-item>
      </ion-list>

      <ion-button expand="block" @click="mostrarTabla" >Mostrar</ion-button>

      <ion-list v-if="tablaVisible">
        <ion-item v-for="(num, index) in numeros" :key="index">
          {{ numero }} x {{ num }} = {{ numero * num }}
        </ion-item>
      </ion-list>


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonItem, IonInput ,IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { ref } from 'vue'

  const numero = ref<number>(8);

  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let tablaVisible = ref<boolean>(false);

  const mostrarTabla = () => {
    tablaVisible.value = !tablaVisible.value;
  };
</script>

<style scoped>
#container {
  padding-top: 50px;
  padding-left: 15px;
  padding-bottom: 15px;
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
