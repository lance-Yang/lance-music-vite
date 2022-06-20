<template>
  <div class="row">
    <div>
      <el-icon class="expand" :size="25" @click="changeCollapse"><Expand /></el-icon>
    </div>
    <div>
      <el-popover
        :width="300"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      >
        <template #reference>
          <el-avatar :icon="UserFilled" />
        </template>
        <template #default>
          <div
            class="demo-rich-conent"
            style="display: flex; gap: 16px; flex-direction: column"
          >
            <el-avatar
              :size="60"
              :icon="UserFilled"
              style="margin-bottom: 8px"
            />
            <div>
              <p
                class="demo-rich-content__name"
                style="margin: 0; font-weight: 500"
              >
                Lance
              </p>
              <p
                class="demo-rich-content__mention"
                style="margin: 0; font-size: 14px; color: var(--el-color-info)"
              >
                1029840711@qq.com
              </p>
            </div>

            <p class="demo-rich-content__desc" style="margin: 0">
              Element Plus, a Vue 3 based component library for developers,
              designers and product managers
            </p>
          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "../../store/index";
import { Expand } from "@element-plus/icons-vue";
import { UserFilled } from "@element-plus/icons-vue";

let store = useStore();
let isCollapse = store.state.menu.isCollapse;

console.log(isCollapse, "isCollapse...");

const changeCollapse = () => {
  store.commit("menu/setCollapse");
  // store.dispatch("menu/setCollapse", { isCollapse: !isCollapse }, { root: true });
};
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
}
.expand:hover{
  cursor: pointer;
}
</style>