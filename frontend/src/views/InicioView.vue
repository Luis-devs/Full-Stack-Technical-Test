<template>
  <div class="inicio">
    <v-item-group multiple>
      <v-container>
        <v-row class="ga-2" justify="center">
          <v-col cols="2" v-for="(sesion, index) in sesiones" :key="index">
            <v-item v-slot="{ isSelected }">
              <v-card
                class="d-flex align-center"
                style="width: 150px"
                height="200px"
                dark
                rounded-3
              >
                <v-scroll-y-transition>
                  <div class="flex-grow-1 text-center d-flex flex-column">
                    <p>{{ sesion.nombre }}</p>
                    <p><strong>Cupos: </strong>{{ sesion.cupo }}</p>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    API: import.meta.env.VITE_APP_API_URL,
    sesiones: [],
  }),
  methods: {
    async getSesiones() {
      await axios.get(`${this.API}/sesion`).then((resp) => {
        this.sesiones = resp.data;
      });
    },
  },
  async created() {
    await this.getSesiones();
  },
};
</script>