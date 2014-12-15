function Window()
{
    var template = document.querySelector("#template");
    var windowTemplate = template.content.querySelector(".window");
    var w = windowTemplate.cloneNode(true);
}

var win = new Window();