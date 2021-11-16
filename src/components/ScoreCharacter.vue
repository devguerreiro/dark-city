<template>
  <div class="box relative">
    <h2 class="text-center text-white">
      {{ character.name }}
    </h2>
    <div class="absolute top-1 right-2">
      <span class="text-white">{{ totalScore }}</span>
    </div>
    <div class="flex justify-between items-center">
      <div class="w-16">
        <b-image
          :src="character.photo"
          :alt="`Ícone do personagem ${character.name}`"
          lazy
          rounded
          responsive
          ratio="9by9"
        />
      </div>
      <div class="flex">
        <b-radio
          v-for="(score, index) of character.score"
          :key="index"
          :value="score"
          size="is-medium"
          type="is-light"
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

  private get totalScore(): number {
    return this.character.score.filter((score) => score).length;
  }
}
</script>
