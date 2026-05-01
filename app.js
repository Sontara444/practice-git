document.getElementById('actionBtn').addEventListener('click', () => {
    alert('Great job! Now you are ready to make a commit.');
});

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
