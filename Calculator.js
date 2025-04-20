function insert(num) {
    document.getElementById("calcDisplay").value += num;
}

function equal() {
    try {
        document.getElementById("calcDisplay").value = eval(document.getElementById("calcDisplay").value);
    } catch {
        alert("Invalid Expression!");
    }
}

function clean() {
    document.getElementById("calcDisplay").value = "";
}

function back() {
    let value = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = value.substring(0, value.length - 1);
}

function sqrt() {
    let value = parseFloat(document.getElementById("calcDisplay").value);
    document.getElementById("calcDisplay").value = Math.sqrt(value);
}

function square() {
    let value = parseFloat(document.getElementById("calcDisplay").value);
    document.getElementById("calcDisplay").value = value * value;
}

function cube() {
    let value = parseFloat(document.getElementById("calcDisplay").value);
    document.getElementById("calcDisplay").value = value * value * value;
}
