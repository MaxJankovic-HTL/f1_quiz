<script setup>
import data from '../../../server/f1_questions.json';

// function randomQuestion() {
//   const easyData = data.filter((item) => item.difficulty === 'easy');
//   const randomIndex = Math.floor(Math.random() * easyData.length);
//   return easyData[randomIndex];
// }
</script>

<template>
  <div class="container text-center mt-4">
    <p>{{ data }}</p>
  </div>
</template>
