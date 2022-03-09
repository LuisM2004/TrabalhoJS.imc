var nome = document.getElementById("name")

function calculate(){



    var peso = document.getElementById("peso")
    var alt = document.getElementById("alt")
    var tbody = document.getElementById("tbody")


    var pesoimc = peso.value;
    var altimc = parseFloat(alt.value);
    var altdiv = parseFloat(altimc / 100);
    var imc = parseFloat(pesoimc / (altdiv * altdiv))
    var alerta
    console.log(imc)
    if (imc <= 18.5){
        alerta = "Abaixo do peso"
        }else if (imc > 18.6 && imc <= 24.9){
         alerta = "Peso ideal"

        }else if (imc > 24.9 && imc <= 29.9){
         alerta = "Sobrepeso"

        }else if (imc > 29.9 && imc <= 34.9){
        alerta = "Obesidade Moderada"

        }else if (imc > 34.9 && imc <= 39.9){
        alerta = "Obesidade Severa"

        }else if (imc > 39.9 && imc <= 49.9){
        alerta = "Obesidade Mórbida"
        }
    thnName = document.createElement("td")
    thnPeso = document.createElement("td")
    thnHeight = document.createElement("td")
    thnIMC = document.createElement("td")
    thnalerta = document.createElement("td")

    tr = document.createElement("tr")

    thnName.append(nome.value)
    thnPeso.append(peso.value)
    thnHeight.append(alt.value)
    thnIMC.append(imc.toFixed(1))
    thnalerta.append(alerta)

    tr.append(thnName)
    tr.append(thnPeso)
    tr.append(thnHeight)
    tr.append(thnIMC)
    tr.append(thnalerta)

    tbody.append(tr)



}

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("alt").value = "";
    
}



