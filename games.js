var gamePattern=[];
var buttonColors = ["red", "blue", "green", "yellow" ];
var randomNumber;
var button;
var userClickedPattern=[];
var Status=false;
var lev=0;
var highScore=0;
var Score=0;
$(document).ready(function(){
    $(".btn").hide();
    $("#infoMatter").hide();
    $("#start").on("click",function keyPress(){ 
        $(".startbtn").hide();
        $(".Score1").hide();
        setTimeout(function(){
            $(".btn").show();
            if (!Status){           
                nextSequence();
                Status=true;
            }
        },400)
    })

    $("#info").on("click", function(){
        $("#label1").hide();
        $(".startbtn").hide();
        $("#infoMatter").show();
    });
})

$("#x").click(function(){
    $("#label1").show();
    $(".startbtn").show();
    $("#infoMatter").hide();
})

$(".btn").on("click", function(){
    var chosenButton=$(this).attr("id");
    userClickedPattern.push(chosenButton);
    clickSound(chosenButton);
    buttonPress(chosenButton);
    checker(userClickedPattern.length-1);
})

function buttonPress(but){
    $("#"+but).css("backgroundColor","rgb(45, 45, 45)").css("boxShadow","3px 3px 3px black").css("border", "15px solid white");
    setTimeout(() => {
        $("#"+but).css("backgroundColor", but).css("boxShadow","-2px -2px 5px white").css("border", "15px solid black");
    }, 200);
}

function nextSequence(){
    userClickedPattern=[];
    lev++;
    $("#label1").text("Round:"+lev);
    randomNumber =Math.floor(Math.random()*4);
    nextRandomButton =buttonColors[randomNumber];
    $("#"+nextRandomButton).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(nextRandomButton);
    clickSound(nextRandomButton);
}
function clickSound(sound){
    var aud=new Audio("sounds/"+sound+".mp3");
    aud.play();
}

function checker(index){
    if (userClickedPattern[index]===gamePattern[index]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
           
        }
    }
    else{
        if(Status){
            errorBackground();
        }
    }
}

function errorBackground(){
    errorOccur();
    clickSound("wrong");
    getStarted();
}

function getStarted(){
    Status=false;
    gamePattern=[];
    lev=0;
}
function   errorOccur(){
    $("body").css("backgroundColor","red");
    setTimeout(function(){
        $("body").css("backgroundColor","rgb(45, 41, 77)");
    }, 900);
    $("#label1").text("GAME OVER!!!");
    if (lev > highScore){
        highScore=lev;
    }
    $(".Score1").show();
    $("#label2").text("your Score: "+lev);
    $("#label3").text("High Score: "+ highScore);
    setTimeout(() => {

        $(".startbtn").show();
        $(".btn").hide();
    }, 800);
   
}

// hey!🕹️😁 my name is  Aakash Vintipalli

