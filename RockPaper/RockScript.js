const outcomes=["ROCK", "PAPER", "SCISSOR"]
var userVal = 0
var compVal = 0
        

function playRock()
{
    output = Math.floor(Math.random() * 3);
    var outVal = outcomes[output]
    document.getElementById("new-text").innerHTML=outVal
    document.getElementById("gameValue").innerHTML="ROCK"
    if (outVal == "SCISSOR"){
        userVal += 1
        document.getElementById("userScore").innerHTML=userVal
        if (userVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You WON !"
            document.getElementById("new-text").innerHTML=""
            
        }
        
    }
    if (outVal == "PAPER"){
        compVal += 1 
        document.getElementById("compScore").innerHTML=compVal
        if (compVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You LOST !"
            document.getElementById("new-text").innerHTML=""
            
        }
    }
    

}
function playPaper()
{
    output = Math.floor(Math.random() * 3);
    var outVal = outcomes[output]
    document.getElementById("new-text").innerHTML=outVal
    document.getElementById("gameValue").innerHTML="PAPER"
    if (outVal == "ROCK"){
        userVal += 1
        document.getElementById("userScore").innerHTML=userVal
        if (userVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You WON !"
            document.getElementById("new-text").innerHTML=""
            
        }
    }
    if (outVal == "SCISSOR"){
        compVal += 1 
        document.getElementById("compScore").innerHTML=compVal
        if (compVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You LOST !"
            document.getElementById("new-text").innerHTML=""
            
        }
    }
    
}
function playScissor()
{
    output = Math.floor(Math.random() * 3);
    var outVal = outcomes[output]
    document.getElementById("new-text").innerHTML=outVal
    document.getElementById("gameValue").innerHTML="SCISSOR"
    if (outVal == "PAPER"){
        userVal += 1
        document.getElementById("userScore").innerHTML=userVal
        if (userVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You WON !"
            document.getElementById("new-text").innerHTML=""
            
        }
        
    }
    if (outVal == "ROCK"){
        compVal += 1 
        document.getElementById("compScore").innerHTML=compVal
        if (compVal == 5){
            document.getElementById("gameBut1").disabled=true
            document.getElementById("gameBut2").disabled=true
            document.getElementById("gameBut3").disabled=true
            document.getElementById("gameValue").innerHTML="You LOST !"
            document.getElementById("new-text").innerHTML=""
            
        }
    }
}

function restart()
{
    var newUserVal = userVal
    var newCompVal = compVal
    userRes = newUserVal - userVal
    compRes = newCompVal - compVal
    document.getElementById("userScore").innerHTML=userRes
    document.getElementById("compScore").innerHTML=compRes
    document.getElementById("new-text").innerHTML=""
    document.getElementById("gameValue").innerHTML=""
    document.getElementById("gameBut1").disabled=false
    document.getElementById("gameBut2").disabled=false
    document.getElementById("gameBut3").disabled=false
    userVal = userRes
    compVal = compRes
}



function closeWin()
{
    window.close()
}