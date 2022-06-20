<template>
  <!-- <transition name="fade"> -->
    <div>
      <!-- <h3 v-show="!isCollapse">Lance-Music</h3> -->
      <el-menu
        default-active="1"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <template #title>发现音乐</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
  <!-- </transition> -->
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
} from "@element-plus/icons-vue";

let store = useStore();
let isCollapse = computed(() => store.state.menu.isCollapse);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>