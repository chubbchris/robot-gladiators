function fight() {
    window.alert("the fight has begun!");
    var playerName = window.prompt("what is your robot's name?");
    // note the lack of quatation marks around playerName
    console.log(playerName) ;
    console.log("This logs a string,good for leaving yourself a message")
    // This will do math and log 20
    console.log(10+10);
    //What is this?
    console.log("our robot's name is "+ playerName);
}

fight();