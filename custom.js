
function addPhotos(e) {

    $("<a href='#'><img id='photosPhoto' src='https://gitlab.gnome.org/uploads/-/system/project/avatar/295/gnome-photos.png'></a>").appendTo(e.target.parentElement);

};


function addPost(e) {

    const title = $("#postModal #postTitle").val().trim();
    const body = $("#postModal #postBody").val().trim();

};

function addBudget(e) {

    const budget = $("#budgetModal #budget").val().trim();

};

function addNote(e) {
    $("<a href='#'><img id='notePhoto' src='https://icon-library.net/images/icon-note/icon-note-0.jpg'></a>").appendTo(e.target.parentElement);
};

function clicked() {
    console.log("clicked");

};

$("#addNote").click(clicked);

function handleNote(e) {

    const title = $("#notesModal #noteTitle").val().trim();
    const body = $("#notesModal #noteBody").val().trim();
    console.log(title, body);


    $('#formNote').click(function () {
        console.log(e.target.parentElement);

        // $("<a href='#'><img id='notePhoto' src='https://icon-library.net/images/icon-note/icon-note-0.jpg'></a>").appendTo(e.target.parentElement);
        e.target.parentElement.insertAdjacentHTML("afterend", "<a href='#'><img id='notePhoto' src='https://icon-library.net/images/icon-note/icon-note-0.jpg'></a>");
    });

};


$(document).ready(function () {

    $(".add").click(function (e) {

        const choice = this.id;
        switch (choice) {
            case "photos":
                addPhotos(e);
                break;
            case "notes":
                handleNote(e);
                break;
            case "budget":
                addBudget(e);
                break;
        }

    });


});

