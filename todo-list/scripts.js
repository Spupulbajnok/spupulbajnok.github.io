
/* egyszerű megoldás
    function AddToList() {
    let newitem = document.getElementById("user-input").value;
    $("#todolist").append("<li>"+newitem+"</li>");   
} */
//let todocontent = [];
let counter = 0;
function AddToList() { //listához adás a gombra kattintva
    let newitem = document.getElementById("user-input").value;
    $("#todolist").append('<li id="item'+counter+'">'+newitem+'</li>');    
  /*  todocontent[counter] = newitem;
    console.log("counter: "+counter);
    console.log(todocontent); */
    LineThrough(counter);    
    counter++;    
};
function LineThrough(n) { //kihúzás a listáról kattintásra
    document.getElementById("item"+n).addEventListener("click", function() {
        $("#item"+n).attr("style", "text-decoration:line-through");     
    });
};
 