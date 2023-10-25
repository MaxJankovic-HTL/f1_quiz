<script setup>
import data from '../../../server/f1_questions.json';

function randomQuestion() {
  const mediumData = data.filter((item) => item.questions.difficulty === 'medium');
  const randomIndex = Math.floor(Math.random() * mediumData.length);
  return mediumData[randomIndex];
}
</script>

<template>
  <div class="container text-center mt-4">
    <p>{{ randomQuestion().question }}</p>
  </div>
</template>