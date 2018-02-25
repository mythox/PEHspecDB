<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex sm12>
        <v-card>
          <v-card-title>
            <h3>Material Spec</h3>
            <v-spacer></v-spacer>
            <v-text-field 
              append-icon="search"
              label="Search by Material Number"
              single-line
              hide-details
              @input="value => doSearch(value)"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="materials"
            :pagination.sync="pagination"
            :total-items="totalItems"
            :loading = "loading"
          >
            <template slot="headerCell" slot-scope="props">
              <v-tooltip bottom>
                <span slot="activator">
                  {{ props.header.text }}
                </span>
                <span>
                  {{ props.header.text }}
                </span>
              </v-tooltip>
            </template>
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{props.item.MaterialNum}}</td>
              <td class="text-xs-left">{{props.item.Description}}</td>
              <td class="text-xs-left">{{props.item.AreaCode}}</td>
              <td class="text-xs-left">{{props.item.ApprovedBy}}</td>
              <td class="text-xs-left">{{props.item.BusinessUnit}}</td>
              <td class="text-xs-left">{{props.item.PreparedBy}}</td>
              <td class="text-xs-left">{{props.item.MSRev}}</td>
            </template>
            <div class="text-xs-center pt-2">
              <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
            </div>
            <!-- <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert> -->
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // TO-DO user login, dialog for item details, print to pdf, make new rev., etc
  export default {
    data () {
      return {
        loading: false,
        headers: [
          { text: 'Material Number', value: 'materialNum' },  // TO-DO server side sorting
          { text: 'Description', value: 'desc', sortable: false },
          { text: 'Area Code', value: 'areaCode', sortable: false },
          { text: 'Approved By', value: 'approvedBy', sortable: false },
          { text: 'Business Unit', value: 'businessUnit', sortable: false },
          { text: 'Prepared By', value: 'preparedBy', sortable: false },
          { text: 'MS Rev', value: 'msRev', sortable: false }
        ],
        // materials: [],
        pagination: {}, // TO-DO pagnination, default 10 items per page
        totalItems: 0
      }
    },
    async mounted () {
      // this.materials = materials
    },
    methods: {
      async doSearch (query) {
        if (query.length >= 8) {
        //   this.loading = true
        //   this.materials = (await MaterialService.getSpec(query)).data
        //   // this.totalItems = this.materials.length
        //   this.loading = false
        // } else if (query.length === 0) {
        //   this.loading = true
        //   this.materials = (await MaterialService.getSpecs()).data
        //   // this.totalItems = this.materials.length
        //   this.loading = false
        }
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      },
      materials () {
        return this.$store.getters.loadedMaterials
      }
    }
  }
</script>
