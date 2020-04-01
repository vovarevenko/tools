<template>
  <q-layout view="hHh lpr fff">
    <q-header
      class="bg-black"
      reveal
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="fas fa-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <router-link
            tag="span"
            to="/"
            class="cursor-pointer"
          >
            {{ title }}
            <span class="text-caption">v{{ version }}</span>
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="leftDrawerWidth"
      :breakpoint="leftDrawerBreakpoint"
      :show-if-above="$q.screen.width >= leftDrawerBreakpoint"
      :persistent="$q.screen.width >= leftDrawerBreakpoint"
      overlay
    >
      <q-scroll-area class="fit">
        <q-list
          padding
          class="menu-list"
        >
          <q-item
            to="/"
            exact
          >
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-separator class="q-my-sm" />

          <q-item
            v-for="(item, key) in links"
            :key="key"
            :to="item.path"
            :active="$route.matched.some(({ path }) => path === item.path)"
          >
            <q-item-section>
              {{ item.title }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div
        class="container-helper"
        :style="{ maxWidth: containerHelperMaxWidth + 'px' }"
      >
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { productName as title, version } from '../../package'

  export default {
    name: 'MainLayout',

    data () {
      return {
        title,
        version,
        leftDrawerOpen: false,
        leftDrawerWidth: 280,
        containerHelperMaxWidth: 800,
        links: [
          { title: 'Character counter', path: '/counter' },
          { title: 'MD5 generator', path: '/generators/md5' },
        ],
      }
    },

    computed: {
      leftDrawerBreakpoint () {
        return this.containerHelperMaxWidth + this.leftDrawerWidth * 2
      },
    },

    meta () {
      return {
        title: this.title,
      }
    },
  }
</script>
