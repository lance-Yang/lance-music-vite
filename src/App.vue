<template>
  <el-config-provider :locale="locale">
    <!-- <div id="nav">
			<router-link to="/">{{ $t("nav.home") }}</router-link> |
			<router-link to="/about">{{ $t("nav.about") }}</router-link> |
			<router-link to="/example">{{ $t("nav.example") }}</router-link> | 
			<a href="src/pages/test.html" target="_blank">访问多入口</a>
		</div>
		<router-view />
		<div hidden>我知道你肯定会修改这里的^.^</div> -->
    <router-link to="/" />
    <router-link to="/about" />
    <router-link to="/example" />
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { i18n } from "./i18n";
import { version, buildTime } from "../build/info.json";

console.log(
  `%c Release Build Info 
%cVersion			v${version}
BuildTime		${buildTime}`,
  "background:#000;color:#FFF;font-weight:bold;",
  "background:#FFF;color:#000;"
);

let locale = computed(() => (i18n.global.messages as any)![i18n.global.locale]);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
