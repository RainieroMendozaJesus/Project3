<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Traductor de Número a Letras</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Traductor de Número a Letras</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h5>Resultado: {{ resultado }}</h5>
        <ion-list>
          <ion-item>
            <ion-input 
              v-model="number" 
              type="number"
              label="Número" 
              label-placement="floating" 
              placeholder="Escriba el número">
            </ion-input>
          </ion-item>
        </ion-list>
        <ion-button expand="block" @click="mostrarTraduccion">Mostrar Traducción</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonItem, IonInput, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

const number = ref<number | null>(null);
const resultado = ref<string>('');

function numeroALetras(n: number): string {
  const unidades = [
    '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'
  ];
  
  const decenas = [
    '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
  ];
  
  const centenas = [
    '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 
    'setecientos', 'ochocientos', 'novecientos'
  ];

  if (n === 0) return 'cero';
  if (n === 100) return 'cien';
  if (n === 1000) return 'mil';
  
  if (n <= 20) return unidades[n];
  
  if (n < 30) {
    const especiales = [
      'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 
      'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'
    ];
    return especiales[n - 21];
  }
  
  if (n < 100) {
    if (n % 10 === 0) return decenas[Math.floor(n / 10)];
    return `${decenas[Math.floor(n / 10)]} y ${unidades[n % 10]}`;
  }
  
  if (n < 200) {
    if (n === 100) return 'cien';
    return `ciento ${numeroALetras(n % 100)}`;
  }
  
  if (n < 1000) {
    if (n % 100 === 0) return centenas[Math.floor(n / 100)];
    return `${centenas[Math.floor(n / 100)]} ${numeroALetras(n % 100)}`;
  }
  
  // Para números mayores a 1000 (puedes expandir esta lógica)
  if (n >= 1000) {
    return 'Número demasiado grande (implementación pendiente)';
  }
  
  return '';
}

function mostrarTraduccion() {
  if (number.value === null || isNaN(number.value)) {
    resultado.value = 'Por favor ingrese un número válido';
    return;
  }
  
  resultado.value = numeroALetras(Math.abs(Math.floor(number.value)));
}

</script>

<style scoped>
#container {
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

ion-input {
  margin-bottom: 15px;
}
</style>
