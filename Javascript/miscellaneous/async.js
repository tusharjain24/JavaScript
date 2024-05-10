async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchUserData();