<template>
  <div>
    <dc-score-character
      v-for="(character, index) of characters"
      :key="index"
      class="bg-primary"
      :character="character"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import DcScoreCharacter from '@/components/ScoreCharacter.vue';

import { Character } from '@/interfaces/character';

@Component({ components: { DcScoreCharacter } })
export default class Score extends Vue {
  private readonly maxScore = 4

  private readonly characters: Array<Character> = [
    {
      name: 'Demônio',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
    {
      name: 'Vampiro',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
    {
      name: 'Lobisomem',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
    {
      name: 'Zumbie',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
    {
      name: 'Caçador',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
    {
      name: 'Sacerdote',
      photo: 'https://source.unsplash.com/random',
      score: Array(this.maxScore),
    },
  ]
}
</script>
