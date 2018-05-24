<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-if="$store.state.isUserLoggedIn">
      <v-flex sm12>
        <v-card>
          <v-card-title>
            <h3>New Material Spec (Not officially approved)</h3>
            <v-spacer></v-spacer>
            <v-text-field 
              append-icon="search"
              label="Search by Material Number, Area Code"
              single-line
              hide-details
              @input="value => doSearch(value)"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="materials"
            :rows-per-page-items="rowsPerPageItems"
            :pagination.sync="pagination"
            :loading = "loading"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{props.item.MaterialNum}}</td>
              <td class="text-xs-left">{{props.item.Description}}</td>
              <td class="text-xs-left">{{props.item.AlloyCode}}</td>
              <td class="text-xs-left">{{props.item.AreaCode}}</td>
              <td class="text-xs-left">{{props.item.PreparedBy}}</td>
              <td class="text-xs-left">{{props.item.PreparedDate}}</td>
              <td class="text-xs-left">{{props.item.NewOrRev}}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-if="!$store.state.isUserLoggedIn">
      <v-flex xs12 class="text-xs-center">
        <h3>Material Online System - Possehl Electronics</h3>
        <p>Please <a href="/signin">login</a> for more</p>
      </v-flex>
    </v-layout> 
  </v-container>
</template>

<script>
  import MaterialService from '@/services/MaterialService'
  // TO-DO user login, dialog for item details, print to pdf, make new rev., etc
  export default {
    data () {
      return {
        loading: false,
        headers: [
          { text: 'Material Number', value: 'MaterialNum' },
          { text: 'Description', value: 'Description', sortable: false },
          { text: 'Alloy', value: 'AlloyCode', sortable: false },
          { text: 'Area Code', value: 'areaCode', sortable: false },
          { text: 'Prepared By', value: 'preparedBy', sortable: false },
          { text: 'Prepared Date', value: 'preparedDate', sortable: false },
          { text: 'Status', value: 'newOrRev', sortable: false } // TO-DO this is incorrect, need real status checker.
        ],
        materials: [],
        pagination: {},
        rowsPerPageItems: [10, 25, {'text': 'All', 'value': -1}]
      }
    },
    async mounted () {
      this.loading = true
      this.materials = (await MaterialService.getNewSpecs()).data
      this.loading = false
    },
    methods: {
      async doSearch (query) {
        if (query.length >= 3) {
          this.loading = true
          this.materials = (await MaterialService.getNewSpec(query)).data
          this.pagination.page = 1
          this.loading = false
        } else if (query.length === 0) {
          this.loading = true
          this.materials = (await MaterialService.getNewSpecs()).data
          this.loading = false
        }
      }
    }
  }
</script>
