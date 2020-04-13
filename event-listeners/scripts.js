
function myFunction() {
    let usercolor = document.getElementById("user-input").value;
    $("button").css("background-color", usercolor);
    $("#user-input").attr("disabled", "disabled");    
}
$("#button1").click(() => {
    console.log("Yeah, you clicked me");
})
    $("#button2").click(() => {
    $("#button1").text("You traitor!");
})
/*    $("#button3").click(() => {
    $("button").css("background-color", "aqua");
}) */