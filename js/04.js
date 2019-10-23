$(document).ready(function() {
    //descendente
    $("div span").css("background-color", "yellow");
    //filhos do elemento
    $("li > ul").css("color", "red");
    //Irmão do seletor
    $("#Item1_1 + li").css("color", "blue");
    // Todos Irmão do seletor
    $("#Item1_1 ~ li").css("color", "blue");

});