let image0 = {
    url: "./images/otters00.jpg",
    title: "I think this is the beginning of a beautiful friendship",
    description: "Pairi Daiza Zoo in Domaine du Cambron, Belgium, has shared some amazing photos of a blossoming friendship between a family of orangutans and their otter neighbours. It is part of a program designed to maintain the primates' wellbeing in captivity. Orangutan populations are threatened by palm oil plantations in their native Borneo and Sumatra.",
    thumbId: 0,
};
let image1 = {
    url: "./images/otters01.jpg",
    title: "Hide and seek",
    description: "As part of the program, a family of Asian small-clawed otters were allowed to live in the river that runs through the enclosure housing the orangutan family: 24-year-old father Ujian, 15-year-old mother Sari and Berani, their three-year-old son. These two look like they're enjoying a fun game of hide and seek!",
    thumbId: 1,
};
let image2 = {
    url: "./images/otters02.jpg",
    title: "Zoo school",
    description: "This looks like a zoo school is going on! We hope the lessons aren't about swinging from ropes or tree vines. The orangutan family arrived at the zoo in 2017. Another two orangutans also live there: Gempa, a male, and Sinta, a female.",
    thumbId: 2,
};
let image3 = {
    url: "./images/otters03.jpg",
    title: "Here kitty, kitty!",
    description: "Fancy a treat? According to zoo spokesman Mathieu Goedefroy, the otters really enjoy getting out of the water and onto the orangutan island to go and play with their furry friends. He added that Berani and Ujian have developed a particularly strong bond with their neighbours.",
    thumbId: 3,
};
let image4 = {
    url: "./images/otters04.jpg",
    title: "Smart animals",
    description: "Zookeepers say orangutans share 97% of their DNA with humans and as a result require a lot of attention and activities to keep them occupied. Staff entertain them all day long with mind games, riddles, puzzles, and other brainy stuff to train their intelligence.",
    thumbId: 4,
};
let gallery = [image0, image1, image2, image3, image4];
let pos = 0;
//aktuális kép betöltése
let LoadImage = (n) => {
    pos = n; //thumbnail és navigation szinkronizálása
    ResetBorder(); //thumbnail képek keretének törlése
    $("#thumb"+n).css("border", "5px solid ivory"); //keret az aktuális thumbnail-re
    $("#current-image").attr("src",gallery[n].url);
    $("#title-holder").text(gallery[n].title);
    $("#description-holder").text(gallery[n].description);
    
}
let ResetBorder = (x) =>{
    for (let i = 0; i < gallery.length; i++) {
        $(".thumbnail").css("border", "none");
    }
}
LoadImage(pos);
//lapozás balra
document.getElementById("nav-left").addEventListener("click", function() {
    if (pos > 0) {
        pos--;    
    }
    else {
        pos = gallery.length-1;
    }    
    LoadImage(pos);    
});
//lapozás jobbra
document.getElementById("nav-right").addEventListener("click", function() {
    if (pos < gallery.length-1) {
        pos++;   
    }
    else {
        pos = 0;
    }
    LoadImage(pos);   
});
//thumbnail képek létrehozása
gallery.forEach(thumb => {    
    $("#thumbnail-holder").append('<div class="tooltip"><img src="'+thumb.url+'" id="thumb'+thumb.thumbId+'" class="thumbnail" onclick="LoadImage('+thumb.thumbId+')"><span class="tooltiptext">'+thumb.title+'</span></div>');
});
$("#thumb0").css("border", "5px solid ivory");
