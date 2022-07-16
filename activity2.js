function getScore(){
    var s=localStorage.getItem("score_key")
    document.getElementById("score").innerHTML="score-"+s
}
function back(){
    window.location="activity_1.html"
}