document.getElementById('refresh').addEventListener('click', function() {
    document.getElementById('search').value = '';
});


document.getElementById('checkLink').addEventListener('click', function() {
    var userLink = document.getElementById('userLink').value;
    checkSafety(userLink);
});

document.getElementById('submit').addEventListener('click', function() {
    var userLink = document.getElementById('userLink').value;
    submitLink(userLink);
});

function checkSafety(url) {
    var safeLinks = [
        'http://example.com',
        'http://another-safe-site.com'
        // Add more safe links as needed
    ];

    var isSafe = safeLinks.includes(url);

    if (isSafe) {
        alert('This site is safe.');
    } else {
        var action = confirm('This site may be fraudulent. Do you want to block it?');
        if (action) {
            alert('Site blocked.');
        } else {
            alert('Site kept.');
        }
    }
}

function submitLink(url) {
    // Add code to handle the submitted link
    alert('Link submitted: ' + url);
}

const textElement = document.getElementById('animatedText');
        const text = "Online Fraud Link Checker ";
        let index = 0;

        function writeText() {
            textElement.textContent += text[index];
            index++;

            if(index < text.length) {
                setTimeout(writeText, 3000); // Adjust the speed (in milliseconds) at which the text appears
            }
        }

        writeText();





