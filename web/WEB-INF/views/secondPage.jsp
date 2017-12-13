
<%--
  Created by IntelliJ IDEA.
  User: Зданевич Олег
  Date: 05.11.2017
  Time: 16:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Second Page</title>
    <link href="resources/css/bootstrap.css" rel="stylesheet" />
    <link href="resources/css/style.css" rel="stylesheet" />
    <script src="resources/js/jquerry.js"></script>
    <script src="resources/js/FileSaver.js"></script>

</head>
<body>
<div hidden id="infoGET" >${FileJSP.data}  </div>
<div id="uac">
    <div onclick="show('none')" id="wrap"></div>

    <div id="window">
        <img class="close" onclick="show('none')" src="http://sergey-oganesyan.ru/wp-content/uploads/2014/01/close.png">
        <center>
            <h3>Delete element</h3>
            <form class="form-inline">
                <div class="form-group">
                    <label for="Xdel">Path:</label>
                    <input type="text" class="form-control" id="Xdel" placeholder="Example: 1,1,1">
                </div>
            </form>
                <button class="btn btn-primary" onclick="del()">Confirm</button>
                <div id="errorDel"></div>

        </center>

    </div>
    <div onclick="showU('none')" id="wrapU"></div>

    <div id="windowU">
        <img class="close" onclick="showU('none')" src="http://sergey-oganesyan.ru/wp-content/uploads/2014/01/close.png">
        <center>
            <h3>Change</h3>
            <form class="form-inline">
                <div class="form-group">
                    <label for="XdelU">Path:</label>
                    <input type="text" class="form-control" id="XdelU" placeholder="Example: 1,2,3">
                </div>
            </form>
            <button class="btn btn-primary" onclick="upd()">Confirm</button>
            <div id="errorDelU"></div>

        </center>

    </div>
    <div onclick="showC('none')" id="wrapC"></div>
    <div id="windowC">
        <img class="close" onclick="showC('none')" src="http://sergey-oganesyan.ru/wp-content/uploads/2014/01/close.png">
        <center>
            <h3>Change or create</h3>
            <form class="form-inline">
                <div class="form-group">
                    <label for="XdelC">Path:</label>
                    <input type="text" class="form-control" id="XdelC" placeholder="Example: 1,2,3">
                </div>
            </form>
            <button class="btn btn-primary" onclick="cre()">Confirm</button>
            <div id="errorDelC"></div>

        </center>

    </div>
    <div onclick="showSort('none')" id="wrapSort"></div>
    <div id="windowSort">
        <img class="close" onclick="showSort('none')" src="http://sergey-oganesyan.ru/wp-content/uploads/2014/01/close.png">
        <center>
            <h3>Sort</h3>
            <form class="form-inline">
                <div class="form-group">
                    <label for="XdelSort">Col:</label>
                    <input type="text" class="form-control" id="XdelSort" placeholder="by which col do you want to sort">
                </div>
            </form>
            <button class="btn btn-primary" onclick="sort()">Confirm</button>
            <div id="errorDelSort"></div>

        </center>

    </div>
<table class="table table-hover" id="table">
    ${FileJSP.data}
</table>
    <label for="nameOfFile">Name for new file:</label>
    <input type="text" class="form-control" id="nameOfFile" placeholder="Name of new File">
    <button class="btn btn-success" onclick="saveFile()">Save</button>
    <button class="btn btn-success" onclick="showSort('block')">Sort</button>
    <button class="btn btn-warning" onclick="showU('block')">Change content</button>
    <button class="btn btn-warning" onclick="showC('block')">Change or add tag</button>
    <button class="btn btn-danger" onclick="show('block')">Delete</button>
<script src="resources/js/ParserAndRepresenter.js"></script>

</div>
</body>
</html>