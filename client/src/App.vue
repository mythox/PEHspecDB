<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="primary">
      <v-toolbar-side-icon dark @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn dark flat to="/">{{title}}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn dark icon to="/signout">
        <v-icon>highlight_off</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
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
      menuItems: [{
        icon: 'event_note',
        title: 'Material',
        link: 'Material'
      },
      {
        icon: 'event_available',
        title: 'General Procurement Spec',
        link: 'NewMaterial'
      },
      {
        icon: 'mail_outline',
        title: 'Mail Route',
        link: 'Signin'
      },
      {
        icon: 'work',
        title: 'Metal & Currency',
        link: 'Signout'
      },
      {
        icon: 'timeline',
        title: 'Pricing',
        link: 'Signout'
      },
      {
        icon: 'face',
        title: 'Supplier',
        link: 'Signout'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MaterialDB'
    }
  },
  name: 'App'
  // methods: {
  //   navigateTo (route) {
  //     this.$router.push(route)
  //   }
  // }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: grey;
}
</style>
