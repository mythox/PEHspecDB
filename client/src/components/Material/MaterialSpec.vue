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
          <v-text-field label="Material Number" v-model="spec[0].MaterialNum"></v-text-field>
          <v-text-field label="Description" v-model="spec[0].Description"></v-text-field>
          <v-text-field label="Alloy" v-model="alloycode"></v-text-field>
          <v-text-field label="Harddness" v-model="hardness"></v-text-field>
          <v-text-field label="Dimension" v-model="dimension.total"></v-text-field>
          <v-text-field label="Thickness" v-model="dimension.thickness"></v-text-field>
          <v-text-field label="Thick.+Tolerance" v-model="spec[0].ToleT"></v-text-field>
          <v-text-field label="Thickness (mm) (Dual Gauge)" v-model="spec[0].z"></v-text-field>
          <v-text-field label="Thick.+Tolerance (Dual Gauge)" v-model="spec[0].ToleT0"></v-text-field>
          <v-text-field label="Thickness (mm) (Dual Gauge 2)" v-model="spec[0].z"></v-text-field>
          <v-text-field label="Thick.+Tolerance (Dual Gauge 2)" v-model="spec[0].ToleT1"></v-text-field>
          <v-text-field label="Width (mm)" v-model="dimension.width"></v-text-field>
          <v-text-field label="Width +Tolerance" v-model="spec[0].ToleW"></v-text-field>
          <v-text-field label="Class" v-model="alloyCat"></v-text-field>
          <v-text-field label="Length (mm) / Plating / Other Prop" v-model="length"></v-text-field>
          <v-text-field label="Length / Plating / Other Prop Type" v-model="lorP"></v-text-field>
          <v-text-field label="Len. +Tolerance" v-model="spec[0].ToleL"></v-text-field>
          <v-text-field label="Option" v-model="spec[0].Options"></v-text-field>
          <v-text-field label="Prepared By" v-model="spec[0].PreparedBy"></v-text-field>
          <v-text-field label="Area" v-model="spec[0].AreaCode"></v-text-field>
          <v-text-field label="Approved By" v-model="spec[0].ApprovedBy"></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs12 lg6>
        <panel>
          <v-text-field label="MS Revision" v-model="spec[0].MSRev"></v-text-field>
          <v-text-field label="Business Unit" v-model="spec[0].BusinessUnit"></v-text-field>
          <v-text-field label="Alloy Code" v-model="spec[0].AlloyCode"></v-text-field>
          <v-text-field label="Harddness Code" v-model="spec[0].HardnessCode"></v-text-field>
          <v-text-field label="Dimension Number" v-model="spec[0].DimensionNum"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance" v-model="spec[0].ToleTneg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance (Dual Gauge)" v-model="spec[0].ToleT0neg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Thick.-Tolerance (Dual Gauge 2)" v-model="spec[0].ToleT1neg"></v-text-field>
          <v-text-field label="" disabled></v-text-field>
          <v-text-field label="Width -Tolerance" v-model="spec[0].ToleWneg"></v-text-field>
          <v-text-field label="Class Code" v-model="spec[0].AlloyCat"></v-text-field>
          <v-text-field label="Length / Plating / Other Prop Code" v-model="spec[0].LengthCode"></v-text-field>
          <v-text-field label="Old Mat. No." v-model="spec[0].CustMatNum"></v-text-field>
          <v-text-field label="Len. -Tolerance" v-model="spec[0].ToleLneg"></v-text-field>
          <v-text-field label="Prepared Date" v-model="preparedDate" :mask="mask"></v-text-field>
          <v-text-field label="Area Code" v-model="spec[0].AreaCode"></v-text-field>
          <v-text-field label="Approved Date" v-model="approvedDate" :mask="mask" ></v-text-field>
          <v-text-field label="Effective Date" v-model="effectiveDate" :mask="mask" ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs12>
        <panel title="Details">
          <v-text-field label="Change Description" v-model="spec[0].RevRemarks" textarea></v-text-field>
          <v-text-field label="Remarks" v-model="spec[0].Remarks" textarea></v-text-field>
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
        alloyCat: null,
        alloycode: null,
        hardness: null,
        dimension: {
          thickness: null,
          width: null,
          total: null
        },
        length: null,
        lorP: null,
        approvedDate: null,
        preparedDate: null,
        effectiveDate: null
      }
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [fulldate, time] = date.split('T')
        const [year, month, day] = fulldate.split('-')

        if (time === '00:00:00.000Z') {
          return `${day}/${month}/${year}`
        } else {
          return `${day}/${month}/${year} ${time}`
        }
      }
    },
    async mounted () {
      try {
        const specID = this.$store.state.route.params.spec
        this.spec = (await MaterialService.getSpec(specID)).data
        this.alloyCat = ((await MaterialService.getAlloyCat(this.spec[0].AlloyCat)).data)[0].AlloyCatDesc
        this.alloycode = ((await MaterialService.getAlloyCode(this.spec[0].AlloyCode)).data)[0].AlloyStandardName
        this.hardness = ((await MaterialService.getHardness(this.spec[0].HardnessCode)).data)[0].Hardness
        this.dimension.thickness = ((await MaterialService.getDimension(this.spec[0].DimensionNum)).data)[0].Thickness
        this.dimension.width = ((await MaterialService.getDimension(this.spec[0].DimensionNum)).data)[0].Width
        this.dimension.total = this.dimension.thickness + ' X ' + this.dimension.width
        if (this.spec[0].LengthCode) {
          this.length = ((await MaterialService.getLength(this.spec[0].LengthCode)).data)[0].Length
          this.lorP = ((await MaterialService.getLength(this.spec[0].LengthCode)).data)[0].LengthOrPlating
        }
        this.approvedDate = this.formatDate(this.spec[0].ApprovedDate)
        this.preparedDate = this.formatDate(this.spec[0].PreparedDate)
        this.effectiveDate = this.formatDate(this.spec[0].EffectiveDate)
      } catch (err) {
        console.log(err)
      }
    },
    components: {
      Panel
    }
  }
</script>
