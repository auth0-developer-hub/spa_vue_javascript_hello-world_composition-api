<template>
  <div class="mobile-nav-bar__tabs">
    <MobileNavBarTab path="/profile" label="Profile" />
    <MobileNavBarTab path="/public" label="Public" />
    <MobileNavBarTab path="/protected" label="Protected" />
    <MobileNavBarTab path="/admin" label="Admin" />
  </div>
</template>

<script setup>
import MobileNavBarTab from "@/components/navigation/mobile/mobile-nav-bar-tab.vue";
</script>

<style scoped></style>
