<template>
  <div class="volume-control">
    <label> | </label>
    <Button :onClick="increase" alt="lauder" title="голосніше">+</Button>
    <Button :onClick="decrease" alt="quiet" title="тихіше">-</Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Button from './Button.vue';

@Component({
  components: {
    Button
  }
})
export default class Volume extends Vue {
  @Prop({ default: 0.02 }) private defaultVolume: number = 0.02;

  private currentVolume: number = 0;
  private audio: HTMLMediaElement | undefined;

  public increase(): void {
    this.currentVolume = this.change(0.1);
  }

  public decrease(): void {
    this.currentVolume = this.change(-0.1);
  }

  private change(value: number): number {
    let res = this.currentVolume + value;
    if (res > 1.0) {
      res = 1.0;
    } else if (res < 0) {
      res = 0;
    }
    return this.round(res);
  }

  private round(value: number): number {
    return Math.round(value * 100) / 100;
  }

  mounted() {
    this.currentVolume = this.defaultVolume;
    this.audio = this.$parent.$refs.audio as HTMLMediaElement;
    this.audio.volume = this.defaultVolume;
  }

  @Watch('currentVolume')
  private onVolumeChange(value: number): void {
    if (!this.audio) {
      throw new Error('No audio control found!');
    }
    this.audio.volume = value;
  }
}
</script>

<style scoped>
.volume-control {
  display: inline;
}
</style>
