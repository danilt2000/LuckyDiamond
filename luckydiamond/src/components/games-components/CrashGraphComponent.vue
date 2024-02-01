<template>
  <LineChart
      :chart-data="data"
      :options="options"
      css-classes="chart-container"
  />
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
  data() {
    return {
      dataValues: [1, 2, 3],
      labels: [""],
      data: null,
      options: {
        plugins: {
          title: {
            text: "Line",
          },
        },
        animation: {
          duration: 200,
          easing: "linear",
          delay: (context) => context.dataIndex * 2,
          onProgress: (animation) => {
            const chart = animation.chart;
            const ctx = chart.ctx;
            const meta = chart.getDatasetMeta(0);
            const points = meta.data;
            const totalSteps = meta.total;

            ctx.save();
            ctx.beginPath();

            points.forEach((point, index) => {
              const prevPoint = meta.data[index - 1];
              const progress = animation.progress;

              if (index === 0 || progress * totalSteps > index) {
                const x = prevPoint ? prevPoint.x + (point.x - prevPoint.x) * progress : point.x;
                const y = prevPoint ? prevPoint.y + (point.y - prevPoint.y) * progress : point.y;

                ctx.lineTo(x, y);
              }
            });

            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.restore();
          },
        },
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

  methods: {
    updateData() {
      const interval = 255;
      let counter = 0;

      const updateInterval = setInterval(() => {
        const nextDataValue = this.dataValues[this.dataValues.length - 1] + 1;
        this.dataValues.push(nextDataValue);

        this.labels.push("");
        this.data = this.chartData;

        if (counter >= 6000 / interval) {
          clearInterval(updateInterval);
        }
        counter++;
      }, interval);
    },
  },

  mounted() {
    this.data = this.chartData;
    this.updateData();
  },
};
</script>

<style>

.chart-container {
  width: 600px;
  top: 250px;
  left: 30%;
}

.chart-container canvas {
  width: 600px !important;
  height: 400px !important;
}


</style>