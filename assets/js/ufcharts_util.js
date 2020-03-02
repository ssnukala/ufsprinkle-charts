/**
 * ufCharts utilities
 */

function addLabels() {
    // Change default options for ALL charts
    Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
        color: '#FE777B'
    });

    var chart = new Chart(ctx, {
        options: {
            plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                    color: '#36A2EB'
                }
            }
        },
        data: {
            datasets: [{
                // Change options only for labels of THIS DATASET
                datalabels: {
                    color: '#FFCE56'
                }
            }]
        }
    });
}