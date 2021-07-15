<template>
  <div class="events">
    <Std v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<script>
// @ is an alias to /src
import Std from "@/components/EventStd.vue";
import StdService from '@/services/StudentList.js'
export default {
  name: "ShowStd",
  components: {
    Std,
  },
  data() {
    return {
      students: null
    };
  },
  created() {
    StdService.getEvents()
    .then((response) => {
      this.students = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-card2 {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card2:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
