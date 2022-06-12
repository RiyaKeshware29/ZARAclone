let ham = document.querySelector(".bar-icon");
let close = document.querySelector("#close-menu");
let sideMenu = document.querySelector(".side-bar");

ham.addEventListener('click', () => {

    ham.style.display = "none";
    close.style.display = "block";
    sideMenu.style.marginLeft = "0px";

});

close.addEventListener('click', () => {

    close.style.display = "none";
    ham.style.display = "block";
    sideMenu.style.marginLeft = "-550px";

});

let info_plus = document.querySelector(".info-plus");
let info_plus_child = document.querySelector(".child-li");

var info = info_plus.addEventListener('click', () => {
    if (info_plus_child.style.display == "none") {
        info_plus.style.color = "black";
        info_plus_child.style.display = "block";
    }
    else {
        info_plus_child.style.display = "none";
        info_plus.style.color = "gray";

    }
    console.log(info)
});

let women = document.querySelector(".women");
let men = document.querySelector(".men");
let kids = document.querySelector(".kids");

let women_li = document.getElementById("women");
let men_li = document.getElementById("men");
let kids_li = document.getElementById("kids");

women.addEventListener('click', () => {
    women_li.style.display = "block";
    men_li.style.display = "none";
    kids_li.style.display = "none";
    women.style.color = "black";
    men.style.color = "gray";
    kids.style.color = "gray";

});

men.addEventListener('click', () => {
    women_li.style.display = "none";
    men_li.style.display = "block";
    kids_li.style.display = "none";
    men.style.color = "black";
    women.style.color = "gray";
    kids.style.color = "gray";

});

kids.addEventListener('click', () => {
    women_li.style.display = "none";
    men_li.style.display = "none";
    kids_li.style.display = "block";
    kids.style.color = "black";
    women.style.color = "gray";
    men.style.color = "gray";

});




let slides = document.getElementsByClassName("slide-container");
let index = 0;

// next function
document.querySelector(".next").addEventListener('click', () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");

});
// prev function
document.querySelector('.prev').addEventListener('click', () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
});



// women men kids slide button 
let slide_btn = document.getElementsByClassName("slide-btn");

function slide_show(n) {

    if (n == 1) {
        index = n - 1;
        slides[n].classList.remove('active');
        slides[n + 1].classList.remove('active');

        slides[index].classList.add('active');
    }
    if (n == 2) {
        index = n - 1;
        slides[n - 2].classList.remove('active');
        slides[n].classList.remove('active');

        slides[index].classList.add('active');
    }
    if (n == 3) {
        index = n - 1;
        slides[n - 3].classList.remove('active');
        slides[n - 2].classList.remove('active');

        slides[index].classList.add('active');
    }
}


//women slider button
let women_slides = document.getElementsByClassName("women-slides");

function women_slide(num) {
    let number = num;
    for (number = 0; number <= women_slides.length; number++) {

        if (num == number) {

            for (let j = 0; j <= women_slides.length; j++) {



                women_slides[j].classList.remove('active-women-slide');

                if (j == number) {

                    women_slides[j].classList.add('active-women-slide');
                    continue;

                }

            }
            console.clear();
        }
    }

}


//men slider button
let men_slides = document.getElementsByClassName("men-slides");

function men_slide(num) {
    let number = num;
    for (number = 0; number <= men_slides.length; number++) {

        if (num == number) {

            for (let j = 0; j <= men_slides.length; j++) {



                men_slides[j].classList.remove('active-men-slide');

                if (j == number) {

                    men_slides[j].classList.add('active-men-slide');
                    continue;

                }

            }
            console.clear();
        }
    }

}





//kids slider button
let kids_slides = document.getElementsByClassName("kids-slides");

function kids_slide(num) {
    let number = num;
    for (number = 0; number <= kids_slides.length; number++) {

        if (num == number) {

            for (let j = 0; j <= kids_slides.length; j++) {



                kids_slides[j].classList.remove('active-kids-slide');

                if (j == number) {

                    kids_slides[j].classList.add('active-kids-slide');
                    continue;

                }

            }
            console.clear();
        }
    }

}





