<template>
  <div>
    <div class="text-center fs-24 lh-32">
      <router-link to="/">home </router-link>
      <RouterLink to="/todolist">todolist</RouterLink>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup></script>
