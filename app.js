const graph1 = document.getElementById('traffic-graph').getContext('2d');
const trafficChart = new Chart(graph1, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1875, 2250, 1500, 2500],
            borderColor: 'rgba(114, 124, 195, .5)',
            fill: true,
            backgroundColor: 'rgba(114, 124, 195, .25)',
            tension: 0.3
        }]
    },
    options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const graph2 = document.getElementById('daily-trafgraph').getContext('2d');
let dailyTraffic = new Chart(graph2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 112, 175, 125, 225, 200, 100],
            backgroundColor: "#727CC3"
        }]
    },
    options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const graph3 = document.getElementById('mobile-graph').getContext('2d');
let mobileGraph = new Chart(graph3, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],
        datasets: [{
            data: [200, 50, 50],
            backgroundColor: ['#727CC3', '#6CC984', '#6DBEC6'],
            hoverOffset: 4,
        }]
    }
});

const traffic = document.querySelector(".traffic-select");
const trafficItems = traffic.querySelectorAll("li");
traffic.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.className !== "selected") {
      for (let i = 0; i < trafficItems.length; i++) {
        trafficItems[i].className = "";
      }
      e.target.className = "selected";
    }
  }
});

const trafficHourly = {
  labels: ['3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
  datasets: [{
    data: [5, 25, 120, 75, 90, 140, 60, 10]
  }]
}

function updateChart(chart, newData) {
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.datasets[0].data;
  chart.update();
}

const trafficSelector = document.querySelector('.traffic-select');
const hourlyTraf = trafficSelector.firstChild;

// hourlyTraf.addEventListener('click', {
//   updateChart(trafficChart, trafficHourly);
// });

const alertDiv = document.querySelector('.alert');
const alertBtn = alertDiv.querySelector('a');

alertBtn.addEventListener('click', () => {
  alertDiv.style.display = "none";
});

const sendBtn = document.querySelector('.btn-send');
const msgField = document.querySelector('textarea');
const userSearch = document.querySelector('#user-search');

sendBtn.addEventListener('click', () => {
  if (msgField.value === "" || userSearch.value === "") {
    alert('please input a username and message');
  }  else {
    msgField.value = "";
    userSearch.value = "";
    alert('Message Successfully Sent');
  }
});
