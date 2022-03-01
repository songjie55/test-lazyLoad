<template>
  <div id="container">
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import {Component} from 'vue-property-decorator';
import {CVue} from "@/mixin";


@Component
export default class App extends CVue {



}
</script>
