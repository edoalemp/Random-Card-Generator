function onload(){
    var sute = 1 //(Math.floor(4*Math.random())+1);
    var num = (Math.floor(13*Math.random())+1);
    var hearts =document.getElementsByClassName("heart");
    var diamonds =document.getElementsByClassName("diamond");
    var clubs =document.getElementsByClassName("club");
    var spades =document.getElementsByClassName("spade");
    var strnum="";
    switch (num){
        case 1:
            strnum="A";
        break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            strnum=num.toString();
        break;
        case 11:
            strnum="J";
        break;
        case 12:
            strnum="Q";
        break;
        case 13:
            strnum="K";
    }
    switch (sute){
        case 1:
            hearts[0].style.display="block";
            hearts[0].innerHTML=strnum;
        break;
        case 2:
            diamonds[0].style.display="inline-flex";
            diamonds[0].innerHTML="<p>"+strnum+"<p>";
        break;
        case 3:
            clubs[0].style.display="inline-flex";
            clubs[0].innerHTML=strnum;
        break
        case 4:
            spades[0].style.display="inline-flex";
            spades[0].innerHTML=strnum;
    }
}