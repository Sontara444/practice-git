document.getElementById('actionBtn').addEventListener('click', () => {
    alert('Great job! Now you are ready to make a commit.');
});

// Dashboard API Mock Logic
document.getElementById('loadStatsBtn').addEventListener('click', () => {
    console.log('Fetching dashboard stats...');
    setTimeout(() => {
        document.getElementById('commitCount').innerText = '42';
        document.getElementById('branchCount').innerText = '3';
        alert('Dashboard stats loaded!');
    }, 500);
});
