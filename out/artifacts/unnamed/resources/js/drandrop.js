var dropArea = document.getElementById("drop-area");
var result = document.getElementById("result");
var dataFile= document.getElementById("file");
var contents;
dropArea.addEventListener("drop", drop); // событие при перетаскивании объекта
dropArea.addEventListener("dragover", dragover); // событие при наведении на объект
dropArea.addEventListener("dragleave", dragleave);

function drop(e) {
    e.preventDefault();
    // информация о перетаксиваемом файле
    var file = e.dataTransfer.files[0];
    if (file.name.match("\.xml")) {
        var reader = new FileReader();
        reader.onload = function (event) {
            contents = event.target.result;
            dataFile.innerHTML = contents;
        };

        reader.onerror = function (event) {
            result.innerHTML = "Файл не может быть прочитан! код " + event.target.error.code;
            this.style.borderColor = "red";
        };

        reader.readAsText(file);
        // вывести информацию о файле
        result.innerHTML = file.name + " <span class='grey'>(" + file.type + " — " + file.size + " байт)</span>";
        this.style.borderColor = "grey";
    }
    else {alert("This is not XML file");}



}

// отмена события по умолчанию
function dragover(e){
    this.style.borderColor = "orange";
    e.preventDefault();
}

function dragleave(e){
    this.style.borderColor = "grey";
    e.preventDefault();
}

