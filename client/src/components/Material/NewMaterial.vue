<template>
  <div>
    <v-text-field 
      append-icon="search"
      label="Search by Material Number"
      single-line
      hide-details
      @input="value => doSearch(value)"
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :pagination.sync="pagination"
      :total-items="totalItems"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{props.item.MaterialNum}}</td>
        <td class="text-xs-left">{{props.item.Description}}</td>
        <td class="text-xs-left">{{props.item.AreaCode}}</td>
        <td class="text-xs-left">{{props.item.ApprovedBy}}</td>
        <td class="text-xs-left">{{props.item.BusinessUnit}}</td>
        <td class="text-xs-left">{{props.item.PreparedBy}}</td>
        <td class="text-xs-left">{{props.item.MSRev}}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import MaterialService from '@/services/MaterialService'
  export default {
    data () {
      return {
        search: '',
        totalItems: 0,
        items: [],
        loading: true,
        pagination: {},
        headers: [
          { text: 'Material Number', value: 'MaterialNum' },  // TO-DO server side sorting
          { text: 'Description', value: 'desc', sortable: false },
          { text: 'Area Code', value: 'areaCode', sortable: false },
          { text: 'Approved By', value: 'approvedBy', sortable: false },
          { text: 'Business Unit', value: 'businessUnit', sortable: false },
          { text: 'Prepared By', value: 'preparedBy', sortable: false },
          { text: 'MS Rev', value: 'msRev', sortable: false }
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.items = data.items
              this.totalItems = data.total
            })
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    methods: {
      async getDataFromApi () {
        this.loading = true
        // if (spec) {
        let items = (await MaterialService.getNewSpecs()).data
        // } else {
          // let items = (await MaterialService.getNewSpec(spec)).data
        // }
        // let items = this.getDesserts()
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination
          const total = items.length
          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]
              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }
          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }
          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      }
      // doSearch (query) {
      //   if (query.length >= 8) {
      //     this.loading = true
      //     this.getDataFromApi(query)
      //       .then(data => {
      //         this.items = data.items
      //         this.totalItems = data.total
      //       })
      //   } else if (query.length === 0) {
      //     this.loading = true
      //     this.getDataFromApi()
      //       .then(data => {
      //         this.items = data.items
      //         this.totalItems = data.total
      //       })
      //   }
      // }
    }
  }
</script>