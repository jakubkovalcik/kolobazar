'use strict'

let temp = 0;


function calculateSum() {
    event.preventDefault();
    const budget = document.querySelector("#budget").value;
    const vysledekElement = document.querySelector(".vysledek");
    const potvrzeniCenyInit = "Vysledna cena vychazi na: ";
    let celyText = "";
    
    let celkovacastka = 0;

    if (document.querySelector('#horske').checked){
        temp = document.querySelector('#pocet-horske').value * 500;
        celkovacastka += temp; 
    }
    if (document.querySelector('#detske').checked){
        temp = document.querySelector('#pocet-detske').value * 200;
        celkovacastka += temp; 
    }
    if (document.querySelector('#silnicni').checked){
        temp = document.querySelector('#pocet-silnicni').value * 1500;
        celkovacastka += temp;  
    }
    if (document.querySelector('#gravel').checked){
        temp = document.querySelector('#pocet-gravel').value * 2500;
        celkovacastka += temp; 
    }

    const vypujckaSelect = document.querySelector('#vypujcka-id');
    const selectedVypujckaValue = vypujckaSelect.value;

    switch (selectedVypujckaValue) {
        case 'petdnu':
            celkovacastka = celkovacastka * 5;
            break;
        case 'tyden':
            celkovacastka = celkovacastka * 7;
            break;
        case 'dvatydny':
            celkovacastka = celkovacastka * 14;
            break;
        case 'mesic':
            celkovacastka = celkovacastka * 30;
            break;
        default:
            break;
    }

    const nosicSelect1 = document.querySelector('#nosic1');
    const nosicSelect2 = document.querySelector('#nosic2');
    if(nosicSelect1.checked){
        celkovacastka = celkovacastka * 1.05;
    }
    else if(nosicSelect2.checked){
        celkovacastka = celkovacastka * 1.10;
    }

    celkovacastka = Math.round(celkovacastka);
    celyText = potvrzeniCenyInit + celkovacastka;
    const emailInput = document.querySelector('#zadejmail');

    if(emailInput.value.includes("@")){

        if (celkovacastka > budget){
            const appendText = " --- Nedostatek financi.";
            celyText = celyText + appendText; 
        }
    
        vysledekElement.textContent = celyText;
    }
    else{
        window.alert("Nespravne zadany email!");
    }
}
