function createAssemblyLine() {
    return {
        hasClima(obj) {
            data = {
              temp: 21,
              tempSettings: 21,
              adjustTemp: function () {
                if (this.temp < this.tempSettings) {
                  this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                  this.temp -= 1;
                }
              },
            };
            Object.assign(obj, data)
        },
        
        hasAudio(obj) {
            data = {
              currentTrack: null,
              nowPlaying: function () {
                if (this.currentTrack != null) {
                  console.log(
                    `Now playing '${this.currentTrack.name} by ${this.currentTrack.artist}`
                  );
                }
              },
            };
            Object.assign(obj, data);
        },
        
        hasParktronic(obj) {
            data = {
              checkDistance: function (distance) {
                let distances = {
                  [distance < 0.1]: "Beep! Beep! Beep!",
                  [0.1 <= distance && distance < 0.25]: "Beep! Beep!",
                  [0.25 <= distance && distance < 0.5]: "Beep!",
                };
                let result = (Object.entries(distances).find((x) => x[0] == "true") || [
                  "true",
                  "",
                ])[1];
                console.log(result);
              },
            };
            Object.assign(obj, data);
        }
    }
}

const assemblyLine = createAssemblyLine();
const myCar = {
  make: "Toyota",
  model: "Avensis",
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
