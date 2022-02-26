// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
   
var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;
    // you can also log multiple valvues at once like this 
    var enemyName =["Roberto","amy andriod", "Robo Trumble"];
    var enemyHealth = 50;
    var enemyAttack = 12;
     console.log(enemyName[0]);
     console.log(enemyName[1]);
     console.log(enemyName[2]);
     console.log(enemyName.length);
    
    var fight = function(enemyName){
        // alert players they have started a round
        window.alert("Welcome to robot gladiators1");
        var PromptFight = window.prompt("would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose");
        //if player choose to fight, then fight 
        if(PromptFight==="fight" || PromptFight==="FIGHT"){
         //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
         enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log (playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining.");
        // check enemy's health
        if (enemyHealth<=0){
          window.alert (enemyName +"has died!");
        }
        else{
          window.alert(enemyName +"still has"+ enemyHealth + "health left.");
        };
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
       console.log(enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining." );
       // check player's health
       if (playerHealth<=0){
         window.alert(playerName +"has died!");
        } else
           window.alert(playerName +"still has"+ playerHealth + "heatlh left");
      // if player chooses to skip
        } else if (PromptFight==="skip"|| PromptFight==="SKIP"){
          var confirmSkip = window.confirm ("are you sure you want to quit");
          if (confirmSkip){
            window.alert(playerName + "has decided to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
          }
          else{
            fight()
          }
       } else {
        window.alert("you need to choose a valid option. Trying again!");
      }
    };
    for (var i = 0; i < enemyName.length; i++){
      fight(enemyName[i]);
      };