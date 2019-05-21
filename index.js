function onload(){
    var sute = (Math.floor(4*Math.random())+1);
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
            //var hearts =document.getElementsByClassName("heart");
            hearts[0].style.display="block";
            diamonds[0].style.display="none";
            clubs[0].style.display="none";
            spades[0].style.display="none";
            hearts[0].innerHTML=strnum;
        break;
        case 2:
            //var diamonds =document.getElementsByClassName("diamond");
            hearts[0].style.display="none";
            diamonds[0].style.display="block";
            clubs[0].style.display="none";
            spades[0].style.display="none";
            diamonds[0].innerHTML=strnum;
        break;
        case 3:
            //var clubs =document.getElementsByClassName("club");
            hearts[0].style.display="none";
            diamonds[0].style.display="none";
            clubs[0].style.display="block";
            spades[0].style.display="none";
            clubs[0].innerHTML=strnum;
        break
        case 4:
            //var spades =document.getElementsByClassName("spade");
            hearts[0].style.display="none";
            diamonds[0].style.display="none";
            clubs[0].style.display="none";
            spades[0].style.display="block";
            spades[0].innerHTML=strnum;
    }
}