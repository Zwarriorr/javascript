function RunGame() {
    // variables
    let userName = prompt("Enter Username:");
    console.log("Hi " + userName);
    let character = prompt('Choose (1 or less) Attacker or (2 or more) Defender:');
    let hpA = 0, hpB = 0;
    const kick = 4, punch = 3, heal_a = 1, heal_d = 5, evade = 3, block = 1;
    let evading = false;
    let blocking = false;
    let blocking_d = false;
    let evading_d = false;
    const attackerChoices = [kick, punch, heal_a];
    const defenderChoices = [block, evade];

    // if statements character choosing
    if (character > 1) {
        console.log("You chose Defender");
        hpA = 20;
        hpB = 15;
        console.log("Your HP is " + hpA);

        while (hpA > 0) {
            let randomIndex_A = Math.floor(Math.random() * 3);
            let attackerChoice = attackerChoices[randomIndex_A];

            if (attackerChoice === punch) {
                if (evading) {
                    console.log("The Attacker tried to punch you but you evaded, he took " + evade + " damage");
                    hpB -= evade;
                    evading = false;
                } else {
                    hpA -= punch;
                    console.log("The Attacker punched you! You took " + punch + " damage");
                }
            } else if (attackerChoice === kick) {
                if (blocking) {
                    console.log("You Blocked the Attacker's kick.");
                    console.log("He fell and took 4 damage.");
                    hpB -= 4
                    blocking = false;
                } else {
                    hpA -= kick;
                    console.log("The Attacker kicked you! You took " + kick + " damage");
                }
            } else if (attackerChoice === heal_a) {
                if ((hpB + heal_a) > 15) {
                    hpB = 15;
                } else {
                    hpB += heal_a;
                }
                console.log("The Attacker healed himself! His HP is " + hpB);
            }

            console.log("Your HP is " + hpA);

            let user_choice = prompt("Choose: \n1 Block\n2 Heal\n3 Evade \n4 Close");
            if(user_choice == 4){
                break;
            }
            if (user_choice == 1) {
                blocking = true;
            } else if (user_choice == 2) {
                if ((hpA + heal_d) > 20) {
                    hpA = 20;
                    console.log("You healed yourself fully!");
                } else {
                    hpA += heal_d;
                }
                console.log("You healed yourself. Your HP is now " + hpA);
            } else if (user_choice == 3) {
                evading = true;
            }
            if (hpB <= 0){
                console.log("You have WON!");
                break;
            }
            if (hpA <= 0) {
                console.log("You have been defeated!");
                break;
            }
        }
    } else {
        console.log("You chose Attacker");
        hpA = 15;
        hpB = 20;
        console.log("Your HP is " + hpA);

        while (hpA > 0) {
            let randomIndex_B = Math.floor(Math.random() * 2);
            let defenderChoice = defenderChoices[randomIndex_B];

            let user_choice_b = prompt("Choose: \n1 Punch\n2 Heal\n3 Kick \n4 Close");
            if(user_choice_b == 4){
                break;
            }
            if (user_choice_b == 1) {
                if (blocking_d) {
                    hpA -= block
                    console.log("The Defender blocked your attack");
                    console.log("You fell and lost " + evade + " HP")
                    blocking_d = false;
                } else {
                    hpB -= punch;
                    console.log("The Defender took " + punch + " damage.");
                    console.log("His HP is " + hpB)
                }
            }else if (user_choice_b == 2) {
                if ((hpA + heal_a) > 15) {
                    hpA = 15;
                    console.log("You healed yourself fully!");
                }else {
                    hpA += heal_a;
                    console.log("You healed yourself. Your HP is now " + hpA);
                }
            } else if (user_choice_b == 3) {
                if (evading_d) {
                    hpA -= evade
                    console.log("The Defender evaded your attack");
                    console.log("You fell and lost " + evade + " HP")
                    evading_d = false;
                } else {
                    hpB -= kick;
                    console.log("The Defender took " + kick + " damage.");
                    console.log("His HP is " + hpB)
                }
            }

            console.log("Your HP is " + hpA);

            if (defenderChoice === block) {
                blocking_d = true;
            } else if (defenderChoice === evade) {
                evading_d = true;
            }
            if (hpA <= 0) {
                console.log("You have been defeated!");
                break;
            }
            if (hpB <= 0){
                console.log("You have WON!");
                break;
            }
        }
    }
}