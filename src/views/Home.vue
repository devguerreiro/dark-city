<template>
  <div class="container mx-auto h-full">
    <main class="h-full">
      <section class="h-full flex flex-col justify-center items-center px-3">
        <div class="h-1/5 flex items-center">
          <h1 class="text-center text-white text-2xl">
            Dark City Annotator
          </h1>
        </div>
        <dc-score class="w-full overflow-scroll bg-dark" />
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
