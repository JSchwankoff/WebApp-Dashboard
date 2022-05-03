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

const alertDiv = document.querySelector('.alert');
const alertBtn = alertDiv.querySelector('a');

alertBtn.addEventListener('click', () => {
  alertDiv.style.display = "none";
});
