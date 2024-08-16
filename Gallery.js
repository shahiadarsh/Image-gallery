
var x = document.getElementsByClassName("hidden-part");
function myFunction() {
//     var x = document.getElementsByClassName("hidden-part");
    var readMore = document.getElementsByClassName("read-more");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
            readMore[0].innerHTML="Show Less" ;
        } else {
            x[i].style.display = "none";
            readMore[0].innerHTML="Show More..." ;
        }
    }
}