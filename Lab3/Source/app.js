
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var N1= profile.getName();
    $("#name").html(N1);

    var E= profile.getEmail();
    $("#email").html(E);
}

function searchAPI() {
    var text = $("#text").val();
    var target = "ar";

    var tran = "https://translation.googleapis.com/language/translate/v2?q=" + text + "&target=ar&key=AIzaSyCkfleD2A-9zHcVW8BS_wluHRP34jwJYys"
    var ar;
    fetch(tran).then((resp) => resp.json()).then(function (data) {
        ar = data;
        console.log(ar.data.translations[0].translatedText)
        $("#translate").html(ar.data.translations[0].translatedText)
        $("#translate1").html(ar.data.translations[0].translatedText)


    });

    var youtube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+text+"&maxResults=3&key=AIzaSyDF0Pfry3BuQSPJJ17I0h7PSJxb9GBM7wY"
    var yt;
    fetch(youtube).then((resp) => resp.json()).then(function (data) {
        yt = data;
        console.log(yt)
        console.log(yt.items[0].snippet.thumbnails.high.url)
        $("#video").html(yt.items[0].snippet.title)
        $("#pic").attr("src", yt.items[0].snippet.thumbnails.high.url)
        $("#video1").html(yt.items[1].snippet.title)
        $("#pic1").attr("src", yt.items[1].snippet.thumbnails.high.url)
        $("#video2").html(yt.items[2].snippet.title)
        $("#pic2").attr("src", yt.items[2].snippet.thumbnails.high.url)

        /*
        console.log(ar.data.translations[0].translatedText)
        $("#translate").html(ar.data.translations[0].translatedText)
        */
    });
}