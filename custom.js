const username = "username";
const tripId = "tripId";
let clickedBtn = null;

$('#formPhotos').click(function () {

    $(clickedBtn.currentTarget.parentElement)
        .next()
        .append("<a href='#'><img id='photosPhoto' src='https://gitlab.gnome.org/uploads/-/system/project/avatar/295/gnome-photos.png'></a>");

    let postData = new FormData($("#formPhotos")[0]);
    const URL = '';

    // $.ajax({
    //         type:'POST',
    //         url:URL,
    //         processData: false,
    //         contentType: false,
    //         data : postData,
    //         success:function(data){
    //           console.log("File Uploaded");
    //         },
    //         error: function(error){
    //             console.log(error); 
    //         }
    //      });
});

// Handle total budget
$(".budget").change(function (e) {

    console.log(e);

    // let previous = parseInt($("#totalBudget").innerText);
    // previous.innerText = (previous + parseInt(this.innerText));

})

$(document).ready(function () {

    $(".add").click(function (e) {
        clickedBtn = e;
    });

    // const username = "dimitris";
    // const URL = "http://localhost:8080/tripPlan/trip/" + username;

    // async function init() {
    //     const datesAcco = await fetch(URL);
    //     const dates = await datesAcco.json();
    //     return dates;
    // }
    // init().then(function (data) {

    //     console.log(data);
    // });
});


// Angular
const App = angular.module("App", []);

App.controller("MainCtrl", function ($scope, $http) {

    $scope.addPost = function () {

        const title = $("#postModal #postTitle").val().trim();
        const body = $("#postModal #postBody").val().trim();

        let object = { title: title, body: body, username: username, tripId: tripId };
        let jsonObject = JSON.stringify(object);
        console.log(jsonObject);
        const URL = "";

        // $http.post(URL,jsonObject)
        //     .then(()=>{
        //         console.log("Successfully sent the post");
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     });
    };

    $scope.addNote = function () {

        $(clickedBtn.currentTarget.parentElement).next().append("<a href='#'><img id='notePhoto' src='https://icon-library.net/images/icon-note/icon-note-0.jpg'></a>");

        const title = $("#notesModal #noteTitle").val().trim();
        const body = $("#notesModal #noteBody").val().trim();

        let object = { title: title, body: body, username: username, tripId: tripId };
        let jsonObject = JSON.stringify(object);
        console.log(jsonObject);
        const URL = "";

        // $http.post(URL,jsonObject)
        //     .then(()=>{
        //         console.log("Successfully sent the note");
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     });
    };

    $scope.addBudget = function () {

        const budget = $("#budgetModal #budget").val().trim();

        $(clickedBtn.currentTarget.parentElement).next().append(budget + '&euro;');

        let object = { dayBudget: budget, username: username, tripId: tripId };
        let jsonObject = JSON.stringify(object);
        console.log(jsonObject);
        const URL = "";

        // $http.post(URL,jsonObject)
        //     .then(()=>{
        //         console.log("Successfully sent the daybudget");
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     });
    };

});
