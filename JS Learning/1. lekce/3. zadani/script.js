function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
document.getElementById("run70").onclick = function() {
    const emailInput = document.getElementById("email70").value;
    const result = validateEmail(emailInput);
    const output = document.getElementById("output70");
    if (result) {
        output.textContent = "Validní email!";
    } else {
        output.textContent = "Nevalidní email!";
    }
    document.getElementById("Output70").value = output.textContent;
}




function findnumbers(input) {
    const re = /\d+/g;
    return input.match(re);
}
document.getElementById("run71").onclick = function() {
    const textInput = document.getElementById("text71").value;
    const nubmers = findnumbers(textInput);
    let output = "";
    if (nubmers) {
        output = "Nalezená čísla: " + nubmers.join(", ");
    } else {
        output = "Nebylo nalezeno žádné číslo.";
    }
    document.getElementById("Output71").value = output;
}



function getdatefrominput(input) {
    const re_den = /(\d+)(?=\.)/;
    const re_mesic = /(?<=\.)\d+(?=\.)/;
    const re_rok = /(?<=\.)\d{4}/;
    const den = input.match(re_den);
    const mesic = input.match(re_mesic);
    const rok = input.match(re_rok);
    let den_output = "";
    let mesic_output = "";
    let rok_output = "";

    if(den) {
        den_output = den[0];
    }
    else {
        den_output = "ERROR";
    }
    if(mesic) {
        mesic_output = mesic[0];
    }
    else {
        mesic_output = "ERROR";
    }
    if(rok) {
        rok_output = rok[0];
    }
    else {
        rok_output = "ERROR";
    }
    return `den = ${den_output}, mesic = ${mesic_output}, rok = ${rok_output}`;
}
document.getElementById("run72").onclick = function() {
    const dateInput = document.getElementById("date72").value;
    let output = getdatefrominput(dateInput);
    document.getElementById("Output72").value = output;
}
