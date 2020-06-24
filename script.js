function openNav() {

    var bars = document.getElementById("menuToggle"); //als er op het menu word geklikt
    bars.classList.toggle("fa-bars"); //zet de hamburger uit

    bars.classList.toggle("fa-times"); //zet het kruisje aan en anders om

    var body = document.getElementById("body"); //haalt de body op
    var x = document.getElementById("myNav");
    if (x.style.height === "100%") {
        x.style.height = "0%"; // het menu is niet te zien
        body.style.overflow = "" //zorgt dat je niet kan scrollen in het menu
    } else {
        x.style.height = "100%"; // het menu is open
        body.style.overflow = "hidden" //je kan weer scrollen
    }
}

// opent tabjes login/register
function openForm(name) {
//  var i, tabcontent, tablinks;
//  tabcontent = document.getElementsByClassName("tabcontent");
//  for (i = 0; i < tabcontent.length; i++) {
//    tabcontent[i].style.display = "none";
//  }
//  tablinks = document.getElementsByClassName("tablinks");
//  for (i = 0; i < tablinks.length; i++) {
//    tablinks[i].className = tablinks[i].className.replace(" active", "");
//  }
//  document.getElementById(name).style.display = "block";
//  evt.currentTarget.className += " active";
    document.getElementById(name).classList.toggle("show");
    
    if (name === "register") {
        document.getElementById("login").classList.add("hide");
        document.getElementById("login").classList.remove("show");
        document.getElementById("register").classList.add("show");
        document.getElementById("register").classList.remove("hide");
        document.getElementById("registera").classList.add("active");
        document.getElementById("logina").classList.remove("active");
    } else {
        document.getElementById("login").classList.remove("hide");
        document.getElementById("login").classList.add("show");
        document.getElementById("register").classList.remove("show");
        document.getElementById("register").classList.add("hide");
        document.getElementById("registera").classList.remove("active");
        document.getElementById("logina").classList.add("active");
    }
}

// Open de sub kopjes in het menu
function openSubMenu(div, plusmin) {
    document.getElementById(plusmin).classList.toggle("fa-plus");
    document.getElementById(plusmin).classList.toggle("fa-minus");

    document.getElementById(div).classList.toggle("showbar");
}

// maakt comments
function getwords() {
    naam = naam.value; //haalt naam op

    text = words.value; // haalt comment op

    // Maakt de comment op in een div en plaats het op de pagina
    document.getElementById("NieuwComment").innerHTML += '<div class="container"> <div class="row"> <div class="col-lg-2 col-md-2 col-sm-2 col-4 picture"> <i class="fas fa-user-circle"></i> </div>  <div class="col-lg-7 col-md-7 col-sm-10 col-8" style="float:right;">    <br><p id="cnaam">' + naam + '</p> <br>   <p id="comment">' + text + '</p>  </div> </div></div>';

}

function like() {

    var like = document.getElementById("like"); //haalt de like op

    // als de like de kleur grijs heeft word hij rood en maakt hij er 2 van als hij rood is maakt hij er 1 van en verandert de kleur in grijs
    if (like.style.color === "grey") {
        like.style.color = "red";
        document.getElementById("likeCounter").innerHTML = 2;
    } else {
        like.style.color = "grey";
        document.getElementById("likeCounter").innerHTML = 1;
    }

}

function bookmark() {
    var bookmark = document.getElementById("bookmark"); //haalt bookmark op
    bookmark.classList.toggle("far"); //verandert van class om click 
    bookmark.classList.toggle("fas"); //verandert van class om click
}

// rechter sidebar het openen en sluiten van Categroie Auteur Periode
// hij neemt 2 variable mee 
function toggleCategorie(down, toggle) {
    document.getElementById(toggle).classList.toggle("show");
    document.getElementById(down).classList.toggle("fa-caret-right");
    document.getElementById(down).classList.toggle("fa-caret-down");
}

// filter voor het filteren
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// Show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};
