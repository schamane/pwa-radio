<template>
  <div class="radio-station">
    <h2>{{ radio.name }}</h2>

    <p>{{ radio.description }} / {{ statusText }} / {{ currentVolume }}</p>
    <div>
      <audio ref="audio" :src="radio.stream" preload="none" />
      <Spinner v-if="loading" />
      <Button green :onClick="play" :disabled="loading || status" alt="play" title="грати">&#9654;</Button>
      <Button :onClick="stop" alt="stop" title="зупинити">&#9616;&nbsp;&#9612;</Button>
      <Volume ref="volume" v-if="!isMobile" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RadioModel } from '../models/RadioModel';
import Button from './common/Button.vue';
import Spinner from './common/Spinner.vue';
import Volume from './common/Volume.vue';

@Component({
  components: {
    Button,
    Spinner,
    Volume
  }
})
export default class Radio extends Vue {
  @Prop() private radio!: RadioModel;
  @Prop() private isMobile!: boolean;

  private loading: boolean = false;
  private currentVolume: number = 0;

  private audioElement: HTMLMediaElement = this.$refs.audio as HTMLMediaElement;
  private status: boolean = false;

  private async play(): Promise<void> {
    try {
      this.loading = true;
      this.audioElement.src = this.radio.stream;
      await this.audioElement.play();
      this.status = true;
    } catch (e) {
      this.status = false;
      console.error(e);
    }
    this.loading = false;
  }

  private async stop(): Promise<void> {
    try {
      this.loading = true;
      await this.audioElement.pause();
      this.audioElement.src = '';
      this.status = false;
    } catch (e) {
      console.error(e);
    }
    this.loading = false;
    console.log('stop', this.audioElement);
  }

  get playedTime(): number {
    return this.audioElement.played.end(0);
  }

  get statusText(): string {
    return this.status ? 'грає' : 'не грає';
  }

  mounted() {
    this.audioElement = this.$refs.audio as HTMLMediaElement;
    console.log("isMobile", this.isMobile);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  border-radius: 2px;
  background: transparent;
  font-weight: bold;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 13px;
  margin: 2px 4px;
  color: #ffcd22;
}

button:hover {
  border: none;
  border-radius: 2px;
  background-color: #93c763;
  color: #3b3a32;
}

button:focus {
  outline: 0;
}
</style>
