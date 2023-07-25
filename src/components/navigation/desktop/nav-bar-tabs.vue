<template>
  <div class="nav-bar__tabs">
    <NavBarTab path="/profile" label="Profile" />
    <NavBarTab path="/public" label="Public" />
    <NavBarTab path="/protected" label="Protected" />
    <NavBarTab path="/admin" label="Admin" />
  </div>
</template>

<script setup>
import NavBarTab from "@/components/navigation/desktop/nav-bar-tab.vue";
</script>
