<template>
  <div class="container mx-auto">
    <header class="h-12 flex justify-around items-center">
      <h1 class="text-blood text-2xl tracking-wider">
        Dark City Marker
      </h1>
      <div>
        <b-button
          type="is-blood"
          size="is-small"
        >
          <span
            class="text-lg"
            @click="resetAll"
          >Resetar</span>
        </b-button>
      </div>
    </header>
    <main>
      <section class="p-3">
        <div class="w-full">
          <score-character
            v-for="(character, index) of characters"
            :key="index"
            class="bg-gradient-to-r from-light to-primary p-2 mb-3"
            :character="character"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Character } from '@/models/character';

import ScoreCharacter from './ScoreCharacter.vue';

@Component({
  components: { ScoreCharacter },
})
export default class Home extends Vue {
  private readonly characters: Array<Character> = [
    new Character('Demônio', '/icons/demonio.svg'),
    new Character('Vampiro', '/icons/vampiro.svg'),
    new Character('Lobisomem', '/icons/lobisomem.svg'),
    new Character('Zumbie', '/icons/zumbie.svg'),
    new Character('Caçador', '/icons/cacador.svg'),
    new Character('Sacerdote', '/icons/sacerdote.svg'),
  ]

  private resetAll(): void {
    this.characters.forEach((c) => c.resetScore());
  }
}
</script>
