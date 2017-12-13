var table = document.getElementById("table");
var file = document.getElementById("nameOfFile");


function saveFile() {
    if (file.value != "") {
        if (file.value.match("\.xml")) {
            file.value = file.value.split(".xml")[0];
        }
        if (file.value != "") {
            $.ajax({
                url: 'save',
                type: 'POST',
                data: "text=1",
                success: function (data) {
                    var blob = new Blob([data], {type: "text/xml;charset=utf-8"});
                    saveAs(blob, file.value + ".xml");
                }
            });

        }
        else {
            alert("Incorrect name");
        }
    }
    else {
        alert("Empty name");
    }
}

function show(state) {

    document.getElementById('window').style.display = state;
    document.getElementById('wrap').style.display = state;
}

function showU(state) {

    document.getElementById('windowU').style.display = state;
    document.getElementById('wrapU').style.display = state;
}

function showC(state) {

    document.getElementById('windowC').style.display = state;
    document.getElementById('wrapC').style.display = state;
}

function showSort(state) {

    document.getElementById('windowSort').style.display = state;
    document.getElementById('wrapSort').style.display = state;
}

function del() {
    show('none');
    var path = document.getElementById('Xdel').value;
    var array = path.split(",");
    var flag = 0;
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            flag = 1;
            break;
        }
        if (array[i] <= 0) {
            flag = 2;
            break;
        }
        array[i] = parseInt(array[i], 10);
    }
    if (flag == 1) {
        alert("No char elements");
        return 0;
    }
    if (flag == 2) {
        alert("Numbers should be postive");
        return 0;
    }
    var JSONstring = "data=" + JSON.stringify(array);

    console.log(JSONstring);
    $.ajax({
        url: 'del',
        type: 'POST',
        data: JSONstring,
        success: function (data) {
            if (data == "1") {
                alert("Invalid Deep")
            }
            else {
                table.innerHTML = data;
            }
        }
    });

}

function sort() {
    showSort('none');
    var path = document.getElementById('XdelSort').value;
    var flag=0;
    if (isNaN(path)) {
        flag = 1;

    }
    if (path <= 0) {
        flag = 2;

    }
    if (flag == 1) {
        alert("No char elements");
        return 0;
    }
    if (flag == 2) {
        alert("Numbers should be postive");
        return 0;
    }
    var JSONstring = "data=" + path;

    console.log(JSONstring);
    $.ajax({
        url: 'sort',
        type: 'POST',
        data: JSONstring,
        success: function (data) {
            if (data == "1") {
                alert("Invalid Size")
            }
            else {
                table.innerHTML = data;
            }
        }
    });

}

function upd() {
    showU('none');
    var path = document.getElementById('XdelU').value;
    var array = path.split(",");
    var flag = 0;
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            flag = 1;
            break;
        }
        if (array[i] <= 0) {
            flag = 2;
            break;
        }
        array[i] = parseInt(array[i], 10);
    }
    if (flag == 1) {
        alert("No char elements");
        return 0;
    }
    if (flag == 2) {
        alert("Numbers should be postive");
        return 0;
    }
    array.push(prompt("New data", ""));
    var JSONstring = "data=" + JSON.stringify(array);

    console.log(JSONstring);
    $.ajax({
        url: 'upd',
        type: 'POST',
        data: JSONstring,
        success: function (data) {
            if (data == "1") {
                alert("Invalid Deep")
            }
            if (data == "2") {
                alert("Tag have childrens");
            }
            else {
                table.innerHTML = data;
            }
        }
    });

}

function cre() {
    showU('none');
    var path = document.getElementById('XdelC').value;
    var array = path.split(",");
    var flag = 0;
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            flag = 1;
            break;
        }
        if (array[i] <= 0) {
            flag = 2;
            break;
        }
        array[i] = parseInt(array[i], 10);
    }
    if (flag == 1) {
        alert("No char elements");
        return 0;
    }
    if (flag == 2) {
        alert("Numbers should be postive");
        return 0;
    }
    array.push(prompt("New Tag Name", ""))
    array.push(prompt("New data", ""));
    var JSONstring = "data=" + JSON.stringify(array);

    console.log(JSONstring);
    $.ajax({
        url: 'cre',
        type: 'POST',
        data: JSONstring,
        success: function (data) {
            if (data == "1") {
                alert("Invalid Deep")
            }
            if (data == "2") {
                alert("Tag not empty");
            }
            else {
                table.innerHTML = data;
            }
        }
    });

}