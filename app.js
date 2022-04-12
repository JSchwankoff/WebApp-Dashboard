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
