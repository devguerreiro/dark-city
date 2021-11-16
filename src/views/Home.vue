<template>
  <div class="container mx-auto">
    <header class="h-12 flex justify-center items-center">
      <h1 class="text-white text-2xl">
        Dark City Marker
      </h1>
    </header>
    <main>
      <section class="p-3">
        <dc-score class="w-full" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DcScore from '@/components/Score.vue';

@Component({
  components: { DcScore },
})
export default class Home extends Vue {}
</script>
