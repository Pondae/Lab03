<template>
  <div class="event-card">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <EventCard2 :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard2 from "@/components/EventCard2.vue";
export default {
    name: 'EventCard',
    props: {
        event:{
            type: Object,
            required: true,
        },
    },
    components: {
        EventCard2,
    }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-card2 {
  text-align: right;
}
</style>