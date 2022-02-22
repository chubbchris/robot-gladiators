
    var playerName = window.prompt("What is your robot's name?");
    var playerHealth = 100;
    var playerAttack = 10;

    // you can also log multiple valvues at once like this 
    console.log(playerName,playerAttack,playerHealth);

    var enemyName = "Roberto";
    var enemyHealth = 50;
    var enemyAttack = 12;

    var fight = function(){
        // alert players they have started a round
        window.alert("Welcome to robot gladiators1");
         //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log (playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining.");
    };

fight();