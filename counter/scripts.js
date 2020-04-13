let counter = 0;
/*$("#button1").click(() => {
    count++;
    $("#actual-number").text(count);    
})*/
document.getElementById("inc-button").addEventListener("click", function() {
    counter++;
//    $("#actual-number").text(count);
    display(counter);
});
document.getElementById("dec-button").addEventListener("click", function() {
    if (counter >0) {
        counter--;    
    }    
//    $("#actual-number").text(count);
    display(counter);
});
function display() {
    $("#actual-number").text(counter);
};