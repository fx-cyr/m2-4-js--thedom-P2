// Preset values
let FROGS = 3;

//Set up the track
for (let count = 1; count <= FROGS; count++) {
  let lane = document.createElement("li");

  lane.id = `lane-${count}`;

  let startingLine= document.createElement("span");
  startingLine.innerText = count;

  lane.appendChild(startingLine)
  track.appendChild(lane);
}

//Call in the frogs!
let racers = []
for (x = 0; x < FROGS ; x++)
racers.push(frogstable[x])


// Line em up

racers.forEach((racer, index) => {
  let newRacer = document.createElement("span");
  newRacer.style.background = racer.color;
  newRacer.innerText = `${racer.number}`; // 1.4
  document.getElementById(`lane-${index+1}`).appendChild(newRacer);

  newRacer.classList.add("frog");
  let frogName = document.createElement("span");
  frogName.classList.add("frog-name");
  frogName.innerText = racer.name;
  document.getElementById(`lane-${index+1}`).appendChild(frogName);

  racers[index].progress = 0;
  racers[index].lane = `lane-${index+1}`;
});

//Make 'em hop!
let makeFrogHop = (racer) => {
  let trackWidth = track.offsetWidth;

  let hop = setInterval(() => {
    let hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    racer.progress += hopLength;


    if (racer.progress >= 100) {
      clearInterval(hop);
    }

    document.querySelector(
      `#${racer.lane} .frog`
    ).style.left = `${racer.progress}%`;
  }, Math.random() * 1000);
}

racers.forEach((racer) => makeFrogHop(racer));

console.log(racers);