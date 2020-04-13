let color = "purple", number = 10, word = "cool";
//color = "red";
if (color === "purple") {
    $(".north").css("background-color", "purple");
}
//number = 101;
if (number > 100) {
    $(".east").text("whoah, that's a big number.");
}
else{
    $(".east").text("just a regular number.");
}
word = "bird";
if (word === "cool") {
    $(".south").text("Power of DOM");
}
else{
    $(".west").text("Power of DOM");
}