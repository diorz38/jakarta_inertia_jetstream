<template>
    <div>
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>

<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";

let data = [
    { month: 'Jan', sales: 10000 },
    { month: 'Feb', sales: 21000 },
    { month: 'Mar', sales: 12000 },
    { month: 'Apr', sales: 23000 },
    { month: 'May', sales: 14000 },
    { month: 'Jun', sales: 15000 },
    { month: 'Jul', sales: 16000 },
    { month: 'Aug', sales: 17000 },
    { month: 'Sep', sales: 18000 },
    { month: 'Oct', sales: 19000 },
    { month: 'Nov', sales: 10000 },
    { month: 'Dec', sales: 11000 }
];
export default {
  components: {
    'ejs-chart' : ChartComponent,
    'e-series-collection' : SeriesCollectionDirective,
    'e-series' : SeriesDirective
  },
  data() {
    return {
      primaryXAxis: {
        valueType: 'Category'
      },
      seriesData: data,
    };
  },
  provide: {
    chart: [ LineSeries, Legend, Category ]
  },
};
</script>
