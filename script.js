let color16;

function restart() {
    const color10 = Math.round(Math.random() * 16777215);
    color16 = "#" + color10.toString(16);
    document.getElementById("left").style.backgroundColor = color16;
    document.getElementById("right").style.backgroundColor = "#ffffff";
    document.getElementById("input").value = "#";
    document.getElementById("output").innerText = "";
}

function check() {
    const input = document.getElementById("input").value.toUpperCase();
    
    const allowedCharacters = /^(#)?[0-9A-F]+$/;
    if (allowedCharacters.test(input) && input.length === 7) {
        const randCol1 = parseInt(color16.slice(1, 3), 16);
        const randCol2 = parseInt(color16.slice(3, 5), 16);
        const randCol3 = parseInt(color16.slice(5, 7), 16);

        const col1 = parseInt(input.slice(1, 3), 16);
        const col2 = parseInt(input.slice(3, 5), 16);
        const col3 = parseInt(input.slice(5, 7), 16);

        const acc1 = 100 - Math.abs(randCol1 - col1) / 2.55;
        const acc2 = 100 - Math.abs(randCol2 - col2) / 2.55;
        const acc3 = 100 - Math.abs(randCol3 - col3) / 2.55;
        const acc = Math.floor((acc1 + acc2 + acc3) / 3);

        document.getElementById("right").style.backgroundColor = input;
        if (acc == 100) {
            document.getElementById("output").innerText = "Your accuracy is " + acc;
        } else {
            document.getElementById("output").innerText = "Your accuracy is " + acc + "%, the correct color was " + color16.toUpperCase();
        }
    } else {
        document.getElementById("output").innerText = "Input a valid HEX code";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    restart();
});

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        check();
    }
});