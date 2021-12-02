<template>
  <div class="box relative">
    <h2 class="text-center text-blood text-xl tracking-widest">
      {{ character.name }}
    </h2>
    <div class="absolute top-1 right-2">
      <span class="text-light text-2xl">{{ character.totalScore }}</span>
    </div>
    <div class="flex justify-between items-center">
      <div class="w-12">
        <b-image
          :src="character.iconPath"
          :alt="`Ícone do personagem ${character.name}`"
          lazy
          rounded
          responsive
          ratio="9by9"
        />
      </div>
      <div class="flex justify-center">
        <b-checkbox
          v-for="(score, index) of character.score"
          :key="index"
          :value="score"
          type="is-light"
          @input="() => character.changeScore(index, !score)"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

import { Character } from '@/models/character';

@Component
export default class ScoreCharacter extends Vue {
  @Prop(Object) private readonly character!: Character
}
</script>
