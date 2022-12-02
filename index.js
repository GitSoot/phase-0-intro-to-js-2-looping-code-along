function writeCards(people,surprise) {
    let thankPeople = []
    for (let i = 0; i < people.length; i++) {
      thankPeople.push(`Thank you, ${people[i]}, for the wonderful ${surprise} gift!`)
    }
    return thankPeople
  }
  
  function countDown(num0) {
    while (num0 > 0) {
      console.log(num0);
      num0 -= 1;
    }
    console.log(num0);
  }