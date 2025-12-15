/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/
document.getElementById("btn31").onclick = function() {
    alert("Ahoj světe!");
}

/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/
document.getElementById("btn32").onclick = () => {
    document.getElementById("text32").textContent = "Text byl změněn!";
}
/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/
document.getElementById("clock33").innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
    document.getElementById("clock33").innerHTML = new Date().toLocaleTimeString();
}, 1000);

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/

document.getElementById("btn34").onclick = function() {
    document.body.style.backgroundColor = "#D3D3D3"; 
}
/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/
document.getElementById("img35").addEventListener("mouseover", function() {
    this.style.width = "60%";
});

document.getElementById("img35").addEventListener("mouseout", function() {
    this.style.width = "30%";
});
/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form36").addEventListener("submit", function(event) {
        event.preventDefault();
        const input1 = document.getElementById("name36").value;
        const input2 = document.getElementById("email36").value;
        console.log("Hodnota input 1:", input1);
        console.log("Hodnota input 2:", input2);
    });
});
    
/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/
count = 0;
document.getElementById("btn37").onclick = function() {
    count += 1;
    document.getElementById("counter37").textContent = count;
}

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/
hidden = false;
document.getElementById("btn38").onclick = function() {
    if (hidden) {
        document.getElementById("text38").style.display = "block";
        hidden = false;
    } else {
        document.getElementById("text38").style.display = "none";
        hidden = true;
    }
}
/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/
function validateForm() {
    const name = document.getElementById("name39").value;
    const email = document.getElementById("email39").value;
    
    if (name === "" || email === "") {
        alert("Chyba: Vyplň jméno a email!");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("Chyba: Zadej validní email!");
        return false;
    }
    
    alert("Formulář je validní!");
    return true;
}

document.getElementById("form39").addEventListener("submit", function(e) {
    e.preventDefault();
    validateForm();
});

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/
document.getElementById("slider40").addEventListener("input", function() {
    const fontSize = this.value + "px";
    document.getElementById("text40").style.fontSize = fontSize;
});


/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/


/* ================================================
   🟣 ÚKOLY 41–50: Pokročilejší logika a práce s daty
   ================================================ */

/* 41) Generuj náhodné heslo z písmen, číslic a symbolů.
      - Funkce přijme délku jako parametr.
      - Použij Math.random a vlastní pole znaků.
*/
function nahodneheslo(delka) {
      const znaky = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let heslo = "";
      for(let i=0;i<delka;i++) {
            let a = Math.floor(Math.random() * znaky.length)
            let b = znaky[a];
            heslo += b;
      }
      return heslo;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn41").onclick = function() {
        const delka = parseInt(document.getElementById("length41").value);
        const heslo = nahodneheslo(delka);
        document.getElementById("pass41").textContent = heslo;
    };

    document.getElementById("delka_hesla").addEventListener("submit", function(e) {
        e.preventDefault();
        const delka = parseInt(document.getElementById("length41").value);
        const heslo = nahodneheslo(delka);
        document.getElementById("pass41").textContent = heslo;
    });
});


/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/
;
function factorial(input) {
      
      
      variable = input;

      for(i=0;i<input;i++) {
            variable = variable * (input - i - 1);

      }
      console.log(variable);

      return variable;


}

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

/* 44) Vytvoř jednoduché stopky – Start / Stop / Reset.
      - Použij setInterval a clearInterval.
      - Funkce musí správně pracovat s proměnnými ve scope.
*/

/* 45) Simuluj hod kostkou (1–6).
      - Funkce vrací náhodné číslo 1–6.
      - Výsledek vypiš do HTML.
*/

/* 46) Najdi nejčastější hodnotu v poli (moda).
      - Vytvoř funkci, která přijme pole jako parametr.
      - Použij objektový „počítací“ slovník (frequency map).
*/

/* 47) Vytvoř funkci, která formátuje datum do českého formátu
      (DD.MM.YYYY).
      - Funkce dostane objekt Date a vrací string.
*/

/* 48) Zjisti, kolik dní zbývá do konce roku.
      - Spočítej rozdíl mezi dnešním datem a 31.12.
      - Vrátí celé číslo (Math.floor).
*/

/* 49) Vytvoř jednoduchý to-do list:
      - Přidávání úkolů
      - Odstraňování úkolů
      - Každá operace musí být funkce.
*/
function todo() {
      const todoInput = document.getElementById("todoInput");
      const todoList = document.getElementById("todoList");
      
      if(!todoInput.value) return;
      
      const li = document.createElement("li");
      li.textContent = todoInput.value;
      li.className = "flex justify-between items-center p-2 bg-gray-200 rounded mb-2";
      
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Smazat";
      deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600";
      deleteBtn.onclick = function() {
            todoList.removeChild(li);
      }
      
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    
}


/* 50) Ulož a načti data z localStorage (např. skóre nebo jméno).
      - Použij localStorage.setItem a localStorage.getItem.
      - Zobraz načtená data v HTML.*/