let users = {
    'user1': { password: 'password1', info: 'User 1 info' },
    'user2': { password: 'password2', info: 'User 2 info' }
};

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (users[username] && users[username].password === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('userInfo').innerText = users[username].info;
        getLocation();
    } else {
        alert('Invalid credentials');
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    initMap(lat, lng);
}

function initMap(lat, lng) {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lng },
        zoom: 15
    });
    new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map
    });
}
