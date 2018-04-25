function game(playerInp){
    var outcomes = ['Rock','Paper','Scissors']
   var x= Math.floor(Math.random() * 3)
   var computer = outcomes[x]

  switch (playerInp){
      case 'Rock':
      if(computer == 'Rock'){
          alert('Tie')
      }else if (computer == 'Paper'){
        alert('You Lose')
      }else if (computer == 'Scissors'){
        alert('You Won')
      }
      break;
      case 'Paper':
      if(computer == 'Rock'){
        alert('You Win')
    }else if (computer == 'Paper'){
      alert('Tie')
    }else if (computer == 'Scissors'){
      alert('You Lose')
    }
    break;

     case 'Scissors':
      if(computer == 'Rock'){
        alert('You Lose')
    }else if (computer == 'Paper'){
      alert('You Win')
    }else if (computer == 'Scissors'){
      alert('Tie')
    } 
    break;
  }
}


