<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-for="material in materials" :key="material.materialNum">
      <v-flex sm3>
        <v-subheader>{{ material.materialNum }}</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          name="input"
          label="test"
          id="testing"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      materials () {
        return this.$store.getters.loadedMaterials
      }
    }
  }
</script>
