function amandasQazaq() {
    alert("Сәлем! "+ isStudent +" Қалайсың?");
}

function amandasRus() {
    alert("Привет! "+ isStudent +" Как ты?");
}

function amandasEng() {
    alert( "Hello! "+ isStudent +" How are you?");
}

let isStudent = prompt("Атыныз кім?: ");
        let language = prompt("Қай тілде сөйлейтініңізді жазыңыз: kz/rus/eng ");
function main() {
        if (language == "kz") {
            amandasQazaq();
        } else if (language == "rus") {
            amandasRus();
        } else if (language == "eng") {
            amandasEng();
        } else {
            alert("Қате енгізу. Тек қазақша, орысша немесе ағылшынша тілдерін таңдаңыз.");
        }
    }
main();
