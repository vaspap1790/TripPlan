
function addPhotos() {

};

function addNote() {

    const title = $("#notesModal #noteTitle").val().trim();
    const body = $("#notesModal #noteBody").val().trim();

};

function addPost() {

    const title = $("#postModal #postTitle").val().trim();
    const body = $("#postModal #postBody").val().trim();

};

function addBudget() {

    const budget = $("#budgetModal #budget").val().trim();

};


$(document).ready(function () {

    $(".add").click(function (e) {

        e.target.parentElement.append("Hello");


    });



    $(".add-choice").click(function () {

        const clicked = this.name;
        switch (clicked) {
            case "photos":
                console.log("photos");
                break;
            case "notes":
                console.log("notes");
                break;
            case "budget":
                console.log("budget");
                break;

        };
    });

    $("#addPhotos").click(addPhotos);
    $("#addNote").click(addNote);
    $("#addBudget").click(addBudget);
    $("#addPost").click(addPost);

});

