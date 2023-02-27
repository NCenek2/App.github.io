export const mainData = {
  title: "Front End Development",
  text1:
    "Welcome, to my Front End Development page where I display some smaller projects that I have created following the FreeCodeCamp curriculum, watching javascript/react project tutorials on youtube, and my own self-created projects.",
  text2:
    "My favorite project at the moment is Fruit Store. In Fruit Store, I tried to replicate a shopping cart. Pick your items, choose the qunaitity, and then get a summary of your fruits.",
};

// {title: "",
// image: "",
// text: "",
// link: ""}

const sectionsData = [
  {
    title: "Quizlet Cards",
    image: "images/quizlet.JPG",
    text: `Quizlet knock off that allows you to create study cards and 
    check definitions based on correctness.`,
    link: "/quizlet",
  },
  {
    title: "What is It?",
    image: "images/what-is-it.JPG",
    text: `This game tests your ability to memorize patterns. 
    The more patterns that you get correct, the harder it gets!
    Built using a Queue Data Structure.`,
    link: "",
    shown: false,
    text2: `<div class="generic-subsections">
    <a class="btn btn-secondary" style="width: 150px;" 
    href="https://ncenek2.github.io/what-is-it/" 
    target="_blank">View Project</a>
    <a class="btn btn-secondary" style="width: 150px;" 
    href="https://github.com/NCenek2/Scripts/blob/main/what-is-it.js" 
    target="_blank">View Code</a>
    </div>`,
  },
  {
    title: "Dice Randomizer",
    image: "images/dice-randomizer.JPG",
    text: `This app will randomly roll a die for each player. 
    The higher number roll wins. Can be used for probability or as an
    actual pair of dice!`,
    link: "",
    shown: false,
    text2: `<div class="generic-subsections">
    <a class="btn btn-secondary" style="width: 150px;" 
    href="https://ncenek2.github.io/dice-randomizer/" 
    target="_blank">View Project</a>
    <a class="btn btn-secondary" style="width: 150px;" 
    href="https://github.com/NCenek2/Scripts/blob/main/dice-randomizer.js" 
    target="_blank">View Code</a>
    </div>`,
  },
  {
    title: "Snake Game",
    image: "images/snake_game.JPG",
    text: "The classic snake game uses WASD as controls. For mobile users, you have to use the buttons at the bottom. What high score can you get??",
    link: "/snake-game",
  },
  {
    title: "Notes App",
    image: "images/notes-app.JPG",
    text: "The user can write his/her notes within this app. Once their notes are outdated, they can delete them. Add as many notes as you want! Notes longer than container size can be seen on scroll",
    link: "/notes-app",
  },
  {
    title: "Dog Selector",
    image: "images/dog-api.JPG",
    text: "Six random dog images are fetched from an API. The user selects their favorites. Their pictures will be displayed when finished with special effects.",
    link: "/dog-api",
  },
  {
    title: "Fruit Store",
    image: "images/fruit_store.JPG",
    text: "A user selects fruits that they want to buy and the quantity. Then, they can review thier order before submitting. On submit, the user will be restarted back to the start.",
    link: "/fruit-store",
  },
  {
    title: "Sound Drumset",
    image: "images/drumset.JPG",
    text: "The Drumset allows a user to either click or press a key to play a corresponding sound. Note: Keypress values are uppercase (Ctrl + key).",
    link: "/sound-drum",
  },
  {
    title: "Calculator",
    image: "images/calculator.JPG",
    text: "This is a calculator, essentially, but the inputs for an equation before clicking the equal sign will be printed in the top-most display.",
    link: "/calculator",
  },
  {
    title: "Color Box",
    image: "images/color_box.JPG",
    text: "Color Box allows the user to input any CSS color and the box will fill with that inputted color. Clicking the space bar will clear the field.",
    link: "/color-box",
  },
  {
    title: "Stop and Go Timer",
    image: "images/go-and-stop-timer.JPG",
    text: "This timer allows for the user to set a session and break length time. After the session time, the break time will run. Set for continuous session and break intervals.",
    link: "/timer",
  },
];

export default sectionsData;

// { title: "Project 6", image: "images/turtle_race.JPG", text: "", link: "" },
