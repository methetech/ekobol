document.addEventListener("DOMContentLoaded", function() {
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            headerPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation for the header:', error);
        });
}

const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            footerPlaceholder.innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation for the footer:', error);
        });
}
});