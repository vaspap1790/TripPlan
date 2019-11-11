
let clickedBtn = null;

$('#formPhotos').click(function () {

    $(clickedBtn.currentTarget.parentElement).next().append("<a href='#'><img id='photosPhoto' src='https://gitlab.gnome.org/uploads/-/system/project/avatar/295/gnome-photos.png'></a>");

});

function addPost(e) {

    const title = $("#postModal #postTitle").val().trim();
    const body = $("#postModal #postBody").val().trim();

};

$('#formBudget').click(function () {

    const budget = $("#budgetModal #budget").val().trim();
    console.log(budget);

    $(clickedBtn.currentTarget.parentElement).next().append(budget + '&euro;');

});


$('#formNote').click(function () {

    $(clickedBtn.currentTarget.parentElement).next().append("<a href='#'><img id='notePhoto' src='https://icon-library.net/images/icon-note/icon-note-0.jpg'></a>");

    const title = $("#notesModal #noteTitle").val().trim();
    const body = $("#notesModal #noteBody").val().trim();

});


$(document).ready(function () {

    $(".add").click(function (e) {
        clickedBtn = e;
    });


});

