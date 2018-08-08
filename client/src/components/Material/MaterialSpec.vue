<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn small>Add</v-btn>
        <v-btn small>Edit</v-btn>
        <v-btn small>Delete</v-btn>
        <v-btn small>Browse</v-btn>
        <v-btn small>Print</v-btn>
      </v-flex>
      <v-flex xs12 lg6 mb-3>
        <panel title="Material Specification">
          <v-text-field label="Material Number" v-model="spec.MaterialNum"></v-text-field>
          <v-text-field label="Description" v-model="spec.Description"></v-text-field>
          <v-text-field label="Alloy" v-model="spec.AlloyCode.AlloyStandardName "></v-text-field>
          <v-text-field label="Harddness" v-model="spec.Hardness.Hardness"></v-text-field>
          <v-text-field label="Dimension" v-model="dimensionTotal"></v-text-field>
          <v-text-field label="Thickness" v-model="spec.Dimension.Thickness"></v-text-field>
          <v-text-field label="Thick.+Tolerance" v-model="spec.ToleT"></v-text-field>
          <v-text-field label="Thickness (mm) (Dual Gauge)" v-model="spec.z"></v-text-field>
          <v-text-field label="Thick.+Tolerance (Dual Gauge)" v-model="spec.ToleT0"></v-text-field>
          <v-text-field label="Thickness (mm) (Dual Gauge 2)" v-model="spec.z"></v-text-field>
          <v-text-field label="Thick.+Tolerance (Dual Gauge 2)" v-model="spec.ToleT1"></v-text-field>
          <v-text-field label="Width (mm)" v-model="spec.Dimension.Width"></v-text-field>
          <v-text-field label="Width +Tolerance" v-model="spec.ToleW"></v-text-field>
          <v-text-field label="Class" v-model="spec.AlloyCat.AlloyCatDesc"></v-text-field>
          <v-text-field label="Length (mm) / Plating / Other Prop" v-if="spec.Length" v-model="spec.Length.Length"></v-text-field>
          <v-text-field label="Length (mm) / Plating / Other Prop" v-else value="Not available"></v-text-field>
          <v-text-field label="Length / Plating / Other Prop Type" v-if="spec.Length" v-model="spec.Length.LengthOrPlating"></v-text-field>
          <v-text-field label="Length / Plating / Other Prop Type" v-else value="Not available"></v-text-field>
          <v-text-field label="Len. +Tolerance" v-model="spec.ToleL"></v-text-field>
          <v-text-field label="Option" v-model="spec.Options"></v-text-field>
          <v-text-field label="Prepared By" v-model="spec.PreparedBy"></v-text-field>
          <v-text-field label="Area" v-model="spec.AreaCode"></v-text-field>
          <v-text-field label="Approved By" v-model="spec.ApprovedBy"></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs12 lg6>
        <panel>
          <v-text-field label="MS Revision" v-model="spec.MSRev"></v-text-field>
          <v-text-field label="Business Unit" v-model="spec.BusinessUnit"></v-text-field>
          <v-text-field label="Alloy Code" v-model="spec.AlloyCodeId"></v-text-field>
          <v-text-field label="Harddness Code" v-model="spec.HardnessCode"></v-text-field>
          <v-text-field label="Dimension Number" v-model="spec.DimensionNum"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance" v-model="spec.ToleTneg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance (Dual Gauge)" v-model="spec.ToleT0neg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance (Dual Gauge 2)" v-model="spec.ToleT1neg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Width -Tolerance" v-model="spec.ToleWneg"></v-text-field>
          <v-text-field label="Class Code" v-model="spec.AlloyCatId"></v-text-field>
          <v-text-field label="Length / Plating / Other Prop Code" v-model="spec.LengthCode"></v-text-field>
          <v-text-field label="Old Mat. No." v-model="spec.CustMatNum"></v-text-field>
          <v-text-field label="Len. -Tolerance" v-model="spec.ToleLneg"></v-text-field>
          <v-text-field label="Prepared Date" v-model="spec.PreparedDate" :mask="mask"></v-text-field>
          <v-text-field label="Area Code" v-model="spec.AreaCode"></v-text-field>
          <v-text-field label="Approved Date" v-model="spec.ApprovedDate" :mask="mask" ></v-text-field>
          <v-text-field label="Effective Date" v-model="spec.EffectiveDate" :mask="mask" ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs12>
        <panel title="Details">
          <v-text-field label="Change Description" v-model="spec.RevRemarks" textarea></v-text-field>
          <v-text-field label="Remarks" v-model="spec.Remarks" textarea></v-text-field>
        </panel>
        <panel title="Properties">
          <v-data-table
            :headers="headersProp"
            :items="matProp"
            :loading = "loading"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{props.item.Type.MSTitle}}</td>
              <td class="text-xs-left">{{props.item.Prop.MSPropDesc}}</td>
              <td class="text-xs-left">{{props.item.RefNum}}</td>
              <td class="text-xs-left">{{props.item.OptionNum}}</td>
              <td v-if="props.item.SpecItem" class="text-xs-left">{{props.item.SpecItem.MsrUnit}}</td>
              <td v-if="props.item.SpecItem" class="text-xs-left">{{props.item.SpecItem.MinVal}}</td>
              <td v-if="props.item.SpecItem" class="text-xs-left">{{props.item.SpecItem.MaxVal}}</td>
              <td v-if="props.item.SpecItem" class="text-xs-left">{{props.item.SpecItem.Remark}}</td>
              <td v-if="props.item.SpecItem" class="text-xs-left">{{props.item.SpecItem.Exception}}</td>
              <td v-if="props.item.SpecDoc" class="text-xs-left">{{props.item.SpecDoc.DocContent}}</td>
            </template>
          </v-data-table>
        </panel>
        <panel title="Registered Areas">
          <v-data-table
            :headers="headersArea"
            :items="matArea"
            :loading = "loading"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">{{props.item.AreaCode}}</td>
              <td class="text-xs-left">{{props.item.Area.AreaDesc}}</td>
              <td class="text-xs-left">{{props.item.VerifiedBy}}</td>
              <td class="text-xs-left">{{props.item.VerifiedDate}}</td>
            </template>
          </v-data-table>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import MaterialService from '@/services/MaterialService'
  import Panel from '@/components/Global/Panel'
  export default {
    data () {
      return {
        spec: null,
        mask: 'date-with-time',
        dimensionTotal: null,
        matProp: null,
        matArea: null,
        loading: false,
        headersProp: [
          { text: 'MS Type', sortable: false },
          { text: 'MS Property', sortable: false },
          { text: 'Ref No.', sortable: false },
          { text: 'Option No.', sortable: false },
          { text: 'Msr Unit', sortable: false },
          { text: 'Min', sortable: false },
          { text: 'Max', sortable: false },
          { text: 'Remarks', sortable: false },
          { text: 'Except', sortable: false }
        ],
        headersArea: [
          { text: 'Area Code', sortable: false },
          { text: 'Area Description', sortable: false },
          { text: 'Verified By', sortable: false },
          { text: 'Verified Date', sortable: false }
        ]
      }
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [fulldate, timestamp] = date.split('T')
        const [year, month, day] = fulldate.split('-')
        const time = timestamp.split('.').slice(0, 1)

        if (time === '00:00:00') {
          return `${day}/${month}/${year}`
        } else {
          return `${day}/${month}/${year} ${time}`
        }
      }
    },
    async mounted () {
      try {
        const specID = this.$store.state.route.params.spec
        this.spec = ((await MaterialService.getSpec(specID)).data)[0]
        this.dimensionTotal = this.spec.Dimension.Thickness + ' X ' + this.spec.Dimension.Width
        this.spec.ApprovedDate = this.formatDate(this.spec.ApprovedDate)
        this.spec.PreparedDate = this.formatDate(this.spec.PreparedDate)
        this.spec.EffectiveDate = this.formatDate(this.spec.EffectiveDate)
        this.matProp = ((await MaterialService.getMatProp(specID)).data)
        this.matArea = ((await MaterialService.getMatArea(specID)).data)
        for (let i = 0; i < this.matArea.length; i++) {
          this.matArea[i].VerifiedDate = this.formatDate(this.matArea[i].VerifiedDate)
        }
      } catch (err) {
        console.log(err)
      }
    },
    components: {
      Panel
    }
  }
</script>
