<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="Material" class="primary">Material List</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="NewMaterial" class="primary">New Material List</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 hidden-xs-only>
        <v-carousel>
          <v-carousel-item 
            v-for="item in plant" 
            :src="item.imageUrl" 
            :key="item.id">
            <div class="title">
              {{item.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 class="text-xs-center">
        <h3>Material Online System - Possehl Electronics</h3>
        <p>Please login for more</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import MaterialService from '@/services/MaterialService'
  export default {
    data () {
      return {
        MaterialNum: '',
        plant: [{
          imageUrl: 'https://www.richardvanhooijdonk.com/wp-content/uploads/2015/11/factory-future.jpg',
          id: '1',
          title: 'Factory'
        },
        {
          imageUrl: 'https://i.ytimg.com/vi/Bp4tGTNNi1I/maxresdefault.jpg',
          id: '2',
          title: 'Machine'
        },
        {
          imageUrl: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5d/2d/p05d2dlc.jpg',
          id: '3',
          title: 'Collaboration'
        },
        {
          imageUrl: 'http://diversity411.com/wp-content/uploads/2016/10/Diversity411-Minority-Contracting.jpg',
          id: '4',
          title: 'Cooperative'
        },
        {
          imageUrl: 'http://www.unisonenc.com/wp-content/uploads/2016/07/designengineer-1110x577.jpg',
          id: '5',
          title: 'Precision'
        }]
      }
    }
    // methods: {
    //   getOneSpec() {
    //     Material.getOneSpec()
    //   }
    // }
  }
</script>

<style scope>
  .title {
    position: absolute;
    bottom: 50px;
    background: rgb(0, 0, 5);
    color: white;
    font-size: 2em;
    padding: 10px;
  }

</style>

