const ctx = document.getElementById('interactionChart').getContext('2d');
const interactionChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Share 18.9%', 'Likes 41%', 'Save 14.2%', 'Comments 25.9%'],
        datasets: [{
            data: [18.9, 41, 14.2, 25.9],
            backgroundColor: ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71']
        }]
    }
});

const ctx2 = document.getElementById('postInsightChart').getContext('2d');
const postInsightChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Top liked post', 'Least liked post'],
        datasets: [{
            data: [75, 25],
            backgroundColor: ['#e74c3c', '#95a5a6']
        }]
    }
});
