function solve(obj) {

  if (obj.dizziness) {
    let reqAmount = 0.1 * obj.weight * obj.experience;
    obj.levelOfHydrated += reqAmount;
    obj.dizziness = false;
  }

  console.log(obj);
}

solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });

solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });

solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });
