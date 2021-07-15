<template>
  <div class="event-card2">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<script>
export default {
    name: 'EventCard2',
    props: {
        event:{
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.event-card2 {
  text-align: right;
}
</style>