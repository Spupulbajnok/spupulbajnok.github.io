let names = ["Luke", "Wedge", "Han", "Chewie", "Leia", "Balazs"];
names.forEach(name =>{
    $("ul").append("<li>"+name+"</li>");
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append("<h1>"+additionalBlock.title+"</h1><p>"+additionalBlock.text+"</p>");