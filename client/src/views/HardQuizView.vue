<script setup>
import data from '../../../server/f1_questions.json';

function randomQuestion() {
  const hardData = data.questions.filter((item) => item.difficulty === 'hard');
  const randomIndex = Math.floor(Math.random() * hardData.length);
  return hardData[randomIndex];
}
</script>

<template>
  <div class="container text-center mt-4">
    <p>{{ randomQuestion().question }}</p>
  </div>
</template>