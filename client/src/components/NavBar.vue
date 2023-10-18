<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav style="background-color: #e10600" class="navbar navbar-expand-lg navbar-dark bg-red py-3">
    <div class="container-fluid">
      <RouterLink class="navbar-brand mx-3" to="/">F1 QUIZ</RouterLink>
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
            <RouterLink class="nav-link active mx-3" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mx-3"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Quiz
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/quiz-easy">Easy</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/quiz-medium">Medium</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/quiz-hard">Hard</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link mx-3" to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
