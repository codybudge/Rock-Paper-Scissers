function game(playerInp){
    var outcomes = ['Rock','Paper','Scissors','Spock','Lizard']
   var x= Math.floor(Math.random() * 5)
   var computer = outcomes[x]

  switch (playerInp){
      case 'Rock':
      if(computer == 'Rock'){
          alert('You both are rocks.....')
      }else if (computer == 'Paper'){
        alert('You got killed by Paper?')
      }else if (computer == 'Scissors'){
        alert('You Smash Scissors')
      }else if(computer == 'Lizard'){
        alert('You Crush the poor Lizard')
      }else if (computer == 'Spock'){
        alert('You got Vaporized by Spock')
      }
      break;
      case 'Paper':
      if(computer == 'Rock'){
        alert('You Killed a Rock?')
    }else if (computer == 'Paper'){
      alert('Paper+Paper=Tie')
    }else if (computer == 'Scissors'){
      alert('You got cut in half sorry :(')
    }else if (computer == 'Lizard'){
      alert('You were eaten by a Lizard, how does that make you feel?')
    }else if (computer == 'Spock'){
      alert('You beat Spock! thats impresive')
    }
    break;

     case 'Scissors':
      if(computer == 'Rock'){
        alert('the Rock Smashed you so you lost')
    }else if (computer == 'Paper'){
      alert('You just murderd a pice of Paper! how could you?')
    }else if (computer == 'Scissors'){
      alert('Can Scissors you know...Scissor?!?!')
    }else if (computer == 'Lizard'){
      alert('You also just decapitated a Lizard...did you even know his name? I did it was Phill, he was a nice Lizard')
    }else if (computer == 'Spock'){
      alert('Spock is Spock and you got rekt! ')
    }
    break;
    case 'Lizard':
      if(computer == 'Rock'){
        alert('the Rock Crushed you so you lost')
    }else if (computer == 'Paper'){
      alert('You just ate a pice of Paper! cool')
    }else if (computer == 'Scissors'){
      alert('ya you just got decapitated by Scissors')
    }else if (computer == 'Lizard'){
      alert('Hey two Lizards what could happen...anything!')
    }else if (computer == 'Spock'){
      alert('You just ate Spock! gross! ')
    }
    break;
    case 'Spock':
      if(computer == 'Rock'){
        alert('You just Vaporized a Rock with your Phaser')
    }else if (computer == 'Paper'){
      alert('The Paper beat you..you are dumber then you look!')
    }else if (computer == 'Scissors'){
      alert('You got too angry and just threw some Scissors out of the air lock into space.... Guess Kirck is Captitan now!')
    }else if (computer == 'Lizard'){
      alert('You see a small lizard on a new planet, you pick it up and die. No one know how! it was probebly had a knife or something?')
    }else if (computer == 'Spock'){
      alert('You are stranded in a planet of ice, you meet a baby Kirk that leads you to a younger version of yourself! ')
    }
    break;
  
  
  }
}


