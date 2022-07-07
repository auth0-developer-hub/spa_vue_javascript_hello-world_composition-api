<template>
  <a
    :href="props.resourceUrl"
    class="auth0-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 class="auth0-feature__headline">
      <img
        class="auth0-feature__icon"
        :src="props.icon"
        alt="external link icon"
      />
      {{ props.title }}
    </h3>
    <p class="auth0-feature__description">{{ props.description }}</p>
  </a>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  resourceUrl: String,
  icon: String,
});
</script>
