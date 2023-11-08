<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav style="background-color: #e10600" class="navbar navbar-expand-lg navbar-dark bg-red py-3">
    <div class="container-fluid">
      <RouterLink class="navbar-brand mx-3" to="/" style="color: white; font-weight: 500"
        ><img src="../../public/images/f1_logo.png" style="height: 50px; margin-top: -2px" />
        QUIZ</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly">
          <li class="nav-item">
            <RouterLink class="nav-link active mx-3" aria-current="page" to="/quiz-easy"
              >EASY</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active mx-3" aria-current="page" to="/quiz-medium"
              >MEDIUM</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active mx-3" aria-current="page" to="/quiz-hard"
              >HARD</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
