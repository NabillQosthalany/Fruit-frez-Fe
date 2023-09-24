<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :style="{height : chartHeight + 'px'}"
  />
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {Bar},
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April','Mei','Jun','July'],
        datasets: [{
          label: 'Fruit Data',
          backgroundColor:['rgba(248,121,121,0.7)','rgba(94, 150, 174, 0.7)','rgba(255, 193, 7, 0.7)','rgba(75, 217, 174, 0.7)'],
          borderColor:['rgba(248,121,121,1)','rgba(94, 150, 174, 1)','rgba(255, 193, 7, 1)','rgba(75, 217, 174, 1)'],
          borderWidth:2,
          data: [50, 20, 12, 22,25,10,15]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio:false,
      },
      chartHeight: 500,
    }
  }
}
</script>
