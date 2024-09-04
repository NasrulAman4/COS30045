// load-navbar.js
document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('navbar-container').innerHTML = xhr.responseText;
        } else {
            console.error('Failed to load navbar:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network error while loading navbar.');
    };
    xhr.send();
});
