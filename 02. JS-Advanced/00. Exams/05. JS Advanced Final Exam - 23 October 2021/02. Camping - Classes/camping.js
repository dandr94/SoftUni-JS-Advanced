class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  findPerson(name) {
    return this.listOfParticipants.find((p) => p.name === name);
  }

  registerParticipant(name, condition, money) {
    if (!(condition in this.priceForTheCamp)) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    const person = this.findPerson(name);

    if (person) {
      return `The ${name} is already registered at the camp.`;
    }

    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }

  unregisterParticipant(name) {
    const person = this.findPerson(name);

    if (!person) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      (p) => p.name !== name
    );
    return `The ${name} removed successfully.`;
  }

  timeToPlay(typeOfGame, participant1, participant2) {
    const player1 = this.findPerson(participant1);
    const player2 = this.findPerson(participant2);
    if (typeOfGame == "WaterBalloonFights") {
      if (!player1 || !player2) {
        throw new Error("Invalid entered name/s.");
      }

      if (player1.condition != player2.condition) {
        throw new Error("Choose players with equal condition.");
      }
      let winner = "";
      if (player1.power > player2.power) {
        player1.wins += 1;
        winner = player1.name;
      } else if (player1.power < player2.power) {
        player2.wins += 1;
        winner = player2.name;
      } else {
        return "There is no winner.";
      }

      return `The ${winner} is winner in the game ${typeOfGame}.`;
    } else if (typeOfGame == "Battleship") {
      if (!player1) {
        throw new Error("Invalid entered name/s.");
      }
      player1.power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }
  }

  toString() {
    let result = [
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
    ];

    const sortedParticipants = this.listOfParticipants.sort(
      (a, b) => b.wins - a.wins
    );

    sortedParticipants.forEach((p) => {
      result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
    });
    return result.join("\n");
  }
}

