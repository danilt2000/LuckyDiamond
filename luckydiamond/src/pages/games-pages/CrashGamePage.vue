<template>
    <LineChart
      :chart-data="data"
      :options="options"
      css-classes="chart-container"
    />
  </template>
  <script setup>
  import { ref, computed, onMounted } from "vue";
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
  
  const dataValues = ref([1,2,3]);
  const labels = ref([""]);
  
  const data = computed(() => ({
    labels: labels.value,
    datasets: [
      {
        label: "Foo",
        data: dataValues.value,
        borderColor: "#cf7c7c",
        backgroundColor: "#78ff00",
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 2,
        // You can also add borderColor and other properties if needed
      },
    ],
  }));
  
  
  onMounted(() => {
    setInterval(() => {
      const nextDataValue = dataValues.value[dataValues.value.length - 1] + 1;
      dataValues.value.push(nextDataValue);
  
      // const nextLabel = labels.value[labels.value.length - 1] + 1;
      
      labels.value.push(""); // Update labels array
    }, 1000);
  });
  
  const options = ref({
    plugins: {
      title: {
        text: "Line",
      },
      elements: {
        point: {
          radius: 0, // Удаляет точки на линии, чтобы они не увеличивались при наведении
        },
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
      interactions: {
        mode: "nearest",
        intersect: false,
      },
      hover: {
        mode: null, // Отключает анимацию при наведении
      },
    },
    animation: {
      duration: 0, // Duration of the animation (in milliseconds)
      easing: "easeOutQuart", // Easing function (optional)
      // Custom animation function
      onProgress: (animation) => {
        const chart = animation.chart;
        const ctx = chart.ctx;
        // const chartArea = chart.chartArea;
        // const dataset = chart.data.datasets[0];
        const meta = chart.getDatasetMeta(0);
        const points = meta.data;
  
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
  
        points.forEach((point, index) => {
          if (index > 0) {
            ctx.lineTo(point.x, point.y);
          }
        });
  
        ctx.lineWidth = 3; // Set the line width
        // ctx.strokeStyle = dataset.borderColor || 'blue'; // Set the line color
        ctx.stroke();
        ctx.restore();
      },
    },
    // Add your other chart options here
  });
  </script>
  