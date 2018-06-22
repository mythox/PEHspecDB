<template>
  <v-container>
    <v-layout row wrap class="mb-3" v-if="$store.state.isUserLoggedIn">
      <v-flex sm12>
        <v-card>
          <v-card-title>
            <h3>Material Specification</h3>
            <v-spacer></v-spacer>
            <v-text-field 
              append-icon="search"
              label="Search by Material Number, Area Code"
              single-line
              autofocus
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
              <td class="text-xs-left">
                <v-btn 
                  depressed flat small
                  :to="{
                    name: 'MaterialSpec', 
                    params: {
                      spec: props.item.MaterialNum
                    }
                }">{{props.item.MaterialNum}}</v-btn></td>
              <td class="text-xs-left">{{props.item.Description}}</td>
              <td class="text-xs-left">{{props.item.AreaCode}}</td>
              <td class="text-xs-left">{{props.item.ApprovedBy}}</td>
              <td class="text-xs-left">{{props.item.BusinessUnit}}</td>
              <td class="text-xs-left">{{props.item.PreparedBy}}</td>
              <td class="text-xs-left">{{props.item.MSRev}}</td>
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
          { text: 'Description', sortable: false },
          { text: 'Area Code', sortable: false },
          { text: 'Approved By', sortable: false },
          { text: 'Business Unit', sortable: false },
          { text: 'Prepared By', sortable: false },
          { text: 'MS Rev', sortable: false }
        ],
        materials: [],
        pagination: {},
        rowsPerPageItems: [10, 25, {'text': 'All', 'value': -1}]
      }
    },
    async mounted () {
      this.loading = true
      this.materials = (await MaterialService.getSpecs()).data
      this.loading = false
    },
    methods: {
      async doSearch (value) {
        if (value.length >= 3) {
          this.loading = true
          this.materials = (await MaterialService.getSpec(value)).data
          this.pagination.page = 1
          this.loading = false
        } else if (value.length === 0) {
          this.loading = true
          this.materials = (await MaterialService.getSpecs()).data
          this.loading = false
        }
      }
    }
  }
</script>
