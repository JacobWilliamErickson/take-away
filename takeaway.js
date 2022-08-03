canWin = (rocks) =>{
    let player1 = false
while (rocks>1){
if (rocks>6){
    console.log(`player one takes 2`)
    rocks-=2
}
else if(rocks == 6|| rocks == 5){
    console.log(`player one takes 5`)
    rocks-=5
}
else if(rocks == 4){
    console.log(`player one takes 3`)
    rocks-=3
}
else if(rocks == 2|| rocks == 3){
    console.log(`player one takes 2`)
    rocks-=2
}

if (rocks>6){
    console.log(`player two takes 2`)
    rocks-=2
}
else if(rocks == 6|| rocks == 5){
    console.log(`player two takes 5`)
    rocks-=5
}
else if(rocks == 4){
    console.log(`player one takes 3`)
    rocks-=3
}
else if(rocks == 2|| rocks == 3){
    console.log(`player one takes 2`)
    rocks-=2
}
else{
    console.log("player 2 cannot move")
    player1 = true
}

}
console.log(player1)
return player1
}


canWin(1)
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true