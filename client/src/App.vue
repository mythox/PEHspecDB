<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      dark
      class="blue"
      v-if="$store.state.isUserLoggedIn"
    >
    <v-list class="pa-0" dense >
      <v-list-tile avatar to="dashboard" dark class="blue">
        <v-list-tile-avatar>
          <img src="https://tr2.cbsistatic.com/hub/i/r/2017/01/31/7e355c52-c68f-4389-825f-392f2dd2ac19/resize/770x/d19d6c021f770122da649e2a77bd1404/androiddatahero.jpg" >
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{$store.state.user.fullname}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      
    </v-list>

    <v-list dense dark class="blue">
      <v-list-group
        prepend-icon="home"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Material</v-list-tile-title>
        </v-list-tile>
        <v-list-tile 
          v-for="item in menuItems_material" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action />
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
              <v-list-tile-title>Material Attribute</v-list-tile-title>
            </v-list-tile>
          <v-list-tile 
            v-for="item in menuItems_material_attr" 
            :key="item.title"
            router
            :to="item.link">
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
      <v-list-group
        prepend-icon="event_available"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>General Procument Spec</v-list-tile-title>
        </v-list-tile>
        <v-list-tile 
          v-for="item in menuItems_general_procu" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action />
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>   
      <v-list-group
        prepend-icon="work"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Metal & Currency</v-list-tile-title>
        </v-list-tile>
        <v-list-tile 
          v-for="item in menuItems_general_metal" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action />
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>     
      <v-list-group
        prepend-icon="timeline"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Pricing</v-list-tile-title>
        </v-list-tile>
        <v-list-tile 
          v-for="item in menuItems_general_pricing" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action />
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group> 
    </v-list>        
    </v-navigation-drawer>  
    
    <v-toolbar app class="primary" dense>
      <v-toolbar-side-icon dark @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn dark flat to="/">{{title}}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat small dark to="/dashboard">
        Welcome {{$store.state.user.fullname}}
      </v-btn>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        dark icon to="/signin">
        <v-icon>face</v-icon>
      </v-btn>
      <v-btn 
        v-if="$store. state.isUserLoggedIn"
        dark icon 
        @click.native.stop="dialog_signout = true">
        <v-icon>highlight_off</v-icon>
      </v-btn>
      <v-dialog v-model="dialog_signout" max-width="290">
        <v-card>
          <v-card-title class="headline">Are you sure want to logout?</v-card-title>
          <v-card-text>lets stay and work more</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" @click.native="dialog_signout = false" @click="logout">Logout</v-btn>
            <v-btn color="green darken-1" flat="flat" @click.native="dialog_signout = false">Stay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018 Possehl Electronics Hong Kong Ltd.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MaterialDB',
      dialog_signout: false,
      menuItems_material: [
        {
          title: 'Material Specification',
          link: 'Material'
        },
        {
          title: 'New Material Specification',
          link: 'NewMaterial'
        },
        {
          title: 'CSM Approval',
          link: 'Signin'
        },
        {
          title: 'Material History',
          link: 'Register'
        },
        {
          title: 'Power Material Cross Reference',
          link: 'Register'
        }
      ],
      menuItems_material_attr: [
        {
          title: 'Alloy',
          link: 'Material'
        },
        {
          title: 'Length/Plating/Other Props',
          link: 'NewMaterial'
        },
        {
          title: 'Hardness',
          link: 'NewMaterial'
        },
        {
          title: 'Dimension',
          link: 'NewMaterial'
        },
        {
          title: 'MS Property',
          link: 'NewMaterial'
        }
      ],
      menuItems_general_procu: [
        {
          title: 'RMP001',
          link: 'Material'
        },
        {
          title: 'RMP002',
          link: 'NewMaterial'
        },
        {
          title: 'PE-SC-001',
          link: 'NewMaterial'
        },
        {
          title: 'PE-SC-002',
          link: 'NewMaterial'
        },
        {
          title: 'Material Procurement Spec',
          link: 'NewMaterial'
        },
        {
          title: 'Procurement Spec History',
          link: 'NewMaterial'
        }
      ],
      menuItems_general_metal: [
        {
          title: 'Metal Price',
          link: 'Material'
        },
        {
          title: 'Exchange Rate',
          link: 'NewMaterial'
        },
        {
          title: 'Metal Contract',
          link: 'NewMaterial'
        },
        {
          title: 'Exchange Rate Contract',
          link: 'NewMaterial'
        }
      ],
      menuItems_general_pricing: [
        {
          title: 'Alloy Price',
          link: 'Material'
        },
        {
          title: 'Alloy Fabrication Cost',
          link: 'NewMaterial'
        },
        {
          title: 'Metal Plating',
          link: 'NewMaterial'
        },
        {
          title: 'Alloy Price Setting',
          link: 'NewMaterial'
        },
        {
          title: 'Qtr Price/Fab. Cost His',
          link: 'NewMaterial'
        }
      ]
    }
  },
  name: 'App',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer
}
.home:hover {
  color: grey
}
</style>
