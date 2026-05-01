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
// Login API Mock Logic
document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    if(user && pass) {
        console.log(`Mock API call: Authenticating ${user}...`);
        alert(`Welcome, ${user}! Login successful.`);
    } else {
        alert('Please enter both username and password.');
    }
});
