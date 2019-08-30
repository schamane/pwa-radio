<template>
  <button class="ctm-button" v-bind:class="{ green: !!green }" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: false }) private green?: boolean;
  @Prop() private onClick?: (e: MouseEvent) => void;
}
</script>

<style scoped>
button.ctm-button {
  border: none;
  border-radius: 0.2em;
  padding: 0.25em 0.5em;
  background: transparent;
  color: #ffcd22;
  font-weight: bold;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1em;
}

button.ctm-button:hover {
  background-color: #678cb1;
  color: #3b3a32;
}

button.ctm-button.green:hover {
  background-color: #93c763;
}

button.ctm-button:focus {
  outline: 0;
}
</style>
