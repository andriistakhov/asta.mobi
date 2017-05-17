const send = function() {
    const d1 = document.getElementById('d1').value;
    const d2 = document.getElementById('d2').value;
    const d3 = document.getElementById('d3').value;
    const from = document.getElementById('from').value;
    const email = document.getElementById('email').value;
    emailjs.send("gmail", "asta_tpl", {
            Message1: d1,
            Message2: d2,
            Message3: d3,
            from: from,
            email: email
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
};