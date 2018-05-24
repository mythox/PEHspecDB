<template>
  <v-container>
     <v-layout row wrap class="mb-2">
      <v-flex xs12 hidden-xs-only>
        <panel title="To-Do">
        </panel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 class="text-xs-center">
        <h3>Material Online System - Possehl Electronics</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Global/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>