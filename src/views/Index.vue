<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <MenuVue />
      </el-aside>
      <el-container>
        <el-header class="header">
          <HeaderVue />
        </el-header>
        <el-main></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100%;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 70px;
}

.main {
  width: 100%;
  height: auto;
  position: absolute;
  top: 72px;
  bottom: 70px;
}

.footer {
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background: yellow;
}
</style>

<script setup lang="ts">
// import { computed } from 'vue';
// import {useStore} from 'vuex'

import MenuVue from "./Menu.vue";
import HeaderVue from "../components/Header/index.vue";

// let store = useStore()

// let text = computed(() => store.state.text);

// console.log(store.state.user,'store....')
</script>