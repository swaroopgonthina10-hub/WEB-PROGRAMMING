function calculateSI() {

    // Get input values
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    // Formula implementation
    var si = (p * r * t) / 100;

    // Display result
    document.getElementById("result").innerHTML = "Simple Interest: " + si;
}