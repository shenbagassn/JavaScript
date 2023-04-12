function getMovieInfo(movieName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        document.getElementById("loadImage").style.display="block"; 
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("mdisplay").style.display="block";
            document.getElementById("loadImage").style.display="none";
            var movieData = xhttp.responseText;
            console.log(movieData);
            
            document.getElementById("title").innerHTML = JSON.parse(movieData).Title;
            document.getElementById("img").src = JSON.parse(movieData).Poster;
            document.getElementById("actor").innerHTML = JSON.parse(movieData).Actors;
        }
        else
        {
            document.getElementById("mdisplay").style.display="none";
            //document.getElementById("err").innerHTML="Movie not found";
            document.getElementById("err").style.color="red";
        }
       alert(xhttp.status) ;
    }

    xhttp.open("GET", "https://www.omdbapi.com/?t=" + movieName + "&apikey=c429066e");
    xhttp.send();
}