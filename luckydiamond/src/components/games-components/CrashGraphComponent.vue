<template>
  <div class="time" v-if="crashdata.Status === 'WaitingForPlayers'">
    <h2>
      {{ crashdata.WaitingTime ? crashdata.WaitingTime.toFixed(1) : "" }} сек.
    </h2>
  </div>
  <LineChart :chart-data="data" :options="options" v-else />
  <h2 class="ratio" :class="{ 'lost-ratio': crashdata.Status === 'GameEnd' }">
    {{ crashdata.CurrentX ? crashdata.CurrentX.toFixed(2) : "" }}x
  </h2>
</template>

<script>
import { LineChart } from "vue-chart-3";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  components: { LineChart },
  props: {
    crashdata: Object,
  },
  mounted() {
    this.data = this.chartData;
    this.updateData();
  },
  data() {
    return {
      dataValues: [],
      numberGraph: 1,
      labels: [" "],
      data: null,
      options: {
        plugins: {
          title: {
            text: "Line",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        animation: false,
      },
    };
  },

  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: "Foo",
            data: this.dataValues,
            borderColor: "#4E5EF2",
            pointStyle: "circle",
            pointRadius: 0,
            pointHoverRadius: 2,
          },
        ],
      };
    },
  },

  watch: {
    crashdata: {
      handler: "updateData",
      immediate: true,
    },
  },

  methods: {
    updateData() {
      let nextDataValue;
      if (this.crashdata.Status === "WaitingForPlayers") {
        this.data = this.chartData;
        this.labels = [""];
        this.dataValues = [this.numberGraph, this.numberGraph];
      } else if (this.crashdata.Status === "InGame") {
        if (this.dataValues.length === 0) {
          this.dataValues = [this.crashdata.CurrentX, this.crashdata.CurrentX];
          nextDataValue = this.crashdata.CurrentX;
          this.numberGraph = this.crashdata.CurrentX;

          this.data = this.chartData;
          this.labels.push("");
          this.dataValues.push(nextDataValue);
        }

        this.numberGraph = this.numberGraph + 0.01;
        nextDataValue = this.numberGraph;

        this.data = this.chartData;
        this.labels.push("");
        this.dataValues.push(nextDataValue);
      } else if (this.crashdata.Status === "GameEnd") {
        this.dataValues = [];
        this.numberGraph = 1;
      } else {
        console.log("Error game");
      }
    },
  },
};
</script>

<style>
</style>
