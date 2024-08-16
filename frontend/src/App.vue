<template>
  <router-view />
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    API: import.meta.env.VITE_APP_API_URL,
  }),
  async created() {
    //Cargar sesiones
    await axios.put(`${this.API}/sesion/llenar`);
  },
};
</script>
