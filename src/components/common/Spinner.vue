<template>
  <div class="spinner"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Spinner extends Vue {}
</script>

<style scoped>
div.spinner {
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
}

div.spinner:after {
  animation: changeContent 0.8s linear infinite;
  /* display: block; */
  content: '⠋';
}

@keyframes changeContent {
  10% {
    content: '⠙';
  }
  20% {
    content: '⠹';
  }
  30% {
    content: '⠸';
  }
  40% {
    content: '⠼';
  }
  50% {
    content: '⠴';
  }
  60% {
    content: '⠦';
  }
  70% {
    content: '⠧';
  }
  80% {
    content: '⠇';
  }
  90% {
    content: '⠏';
  }
}
</style>
