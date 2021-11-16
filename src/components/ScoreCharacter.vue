<template>
  <div class="box relative">
    <h2 class="text-center text-white text-xl">
      {{ character.name }}
    </h2>
    <div class="absolute top-1 right-2">
      <span class="text-white text-lg">{{ totalScore }}</span>
    </div>
    <div class="flex justify-between items-center">
      <div class="w-12">
        <b-image
          :src="character.photo"
          :alt="`Ícone do personagem ${character.name}`"
          lazy
          rounded
          responsive
          ratio="9by9"
        />
      </div>
      <div class="flex justify-center">
        <b-checkbox
          v-for="(score, index) of characterScore"
          :key="index"
          class="dc__checkbox"
          :value="score"
          type="is-light"
          @input="() => changeScore(score, index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Character } from '@/interfaces/character';

@Component
export default class ScoreCharacter extends Vue {
  @Prop(Object) private readonly character!: Character

  private readonly characterScore: Array<boolean> = [...this.character.score]

  private get totalScore(): number {
    return this.characterScore.filter((score) => score).length;
  }

  private changeScore(score: boolean, index: number): void {
    this.characterScore.splice(index, 1, !score);
  }
}
</script>

<style>
.dc__checkbox span.check {
  border-radius: 50% !important;
}
</style>
