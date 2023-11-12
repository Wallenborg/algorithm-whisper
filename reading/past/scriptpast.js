// const cards = document.querySelectorAll(".card-grid > div");
// const cardValues = Array.from({ length: 36 }, (_, index) => index + 1);

// // Skapa en unik slumpmässig uppsättning kort
// const uniqueRandomCards = [];
// while (uniqueRandomCards.length < 3) {
//   const randomIndex = Math.floor(Math.random() * cardValues.length);
//   const cardValue = cardValues.splice(randomIndex, 1)[0];
//   uniqueRandomCards.push(cardValue);
// }

// cards.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     // Byt baksidan av kortet till en slumpad framsida från den unika uppsättningen
//     const cardValue = uniqueRandomCards[index];
//     card.querySelector("img").src = `../img/card${cardValue}.jpg`;
//   });
// });

// -------
// TEST
// -------

// Assuming you have an array of card values somewhere in your code
// For example, you can define it like this:
const cardValues = Array.from({ length: 36 }, (_, index) => index + 1);

// Create an object with card values and descriptive text
const cardDescriptions = {
  1: "Indicating the significance of planning and strategy, this card advises finding your way through complex digital challenges with a structured approach.",
  2: "Suggesting spiritual or emotional guidance in the digital realm, this card encourages seeking support and wisdom from online communities or mentors.",
  3: "Suggesting a period of uncertainty and confusion in the digital world, this card encourages confronting your fears and uncertainties.",
  4: "This card represents the need to make a decision based on a balance between information and intuition. It encourages seeking wisdom and guidance in the digital realm to make informed choices.",
  5: "Signifying a time of gaining insight or wisdom through digital channels, this card suggests you may receive guidance from a mentor or expert in the digital field.",
  6: "This card suggests the need to adapt, transform, or innovate in response to evolving digital circumstances. It encourages you to find creative solutions and turn challenges into opportunities.",
  7: "This card warns of unexpected disruptions in the digital space, emphasizing the importance of adaptability and crisis management to address unforeseen issues.",
  8: "This card indicates a time of reaping the benefits of your digital efforts or investments. It's a period of abundance and rewards.",
  9: "Signifying the power of collective efforts, this card encourages working together and leveraging group wisdom in the digital world.",
  10: "This card represents the need to navigate complex digital systems and challenges. It encourages exploring multiple options before finding a solution.",
  11: "Signifying the importance of setting strong boundaries in your digital life, this card encourages you to protect yourself and your digital presence from potential threats and intrusions.",
  12: "Encouraging you to tap into digital realms for profound insights and transcend everyday limitations, this card signifies the potential for higher understanding.",
  13: "This card signifies a time of transformation and opportunities in the digital world. It suggests exploring new realms or ideas in the digital space, opening doors to fresh possibilities.",
  14: "Suggesting a new perspective or deep understanding of a digital issue, this card hints at a transformative insight on the horizon.",
  15: "A warning card, it advises caution against hidden threats or betrayals within the digital spaces you trust.",
  16: "Encouraging creativity and exploration, this card prompts you to embrace your creative side and venture into new virtual realms for inspiration.",
  17: "This card indicates that you possess the skills and intuition needed to uncover hidden digital truths and solve complex problems.",
  18: "A cautionary card, it warns against fanatical devotion to digital idols or trends that might lead to unhealthy consequences.",
  19: "Suggesting a period of isolation or feeling lost in the digital world, this card encourages introspection and seeking inner guidance.",
  20: "Signifying the ability to uncover hidden information, secrets, or personal truths in the digital domain, this card represents revelation and discovery.",
  21: "Reminding you of the impact you have on others in the digital world, this card emphasizes the responsibility that comes with your digital influence.",
  22: "A warning card, it advises against unhealthy digital consumption and influences that may be draining you",
  23: "Signifying the need to explore hidden aspects of the digital realm, this card invites you to uncover the unknown and delve into uncharted territories.",
  24: "Suggesting the necessity of letting go of outdated digital habits, relationships, or ideas to make room for new beginnings, this card symbolizes transformation and renewal.",
  25: "Suggesting that a message or communication holds significance in your digital life, this card represents the power of communication and connection.",
  26: "A cautionary card, it warns against surrounding yourself only with like-minded voices and encourages seeking diverse viewpoints for balanced perspectives.",
  27: "Signifying concealed forces or hidden information at play in the digital realm, this card represents the importance of uncovering hidden truths.",
  28: "Representing a period of uncertainty and the search for a clear path or purpose in the digital landscape, this card encourages introspection.",
  29: "A warning card, it indicates the presence of deceitful actions or hidden threats in the digital space. It advises caution and vigilance.",
  30: "Encouraging a deep dive into intricate digital matters and exploring the minutiae, this card signifies attention to detail and precision.",
  31: "Signifying invisible ties and connections in the digital world, this card emphasizes recognizing underlying digital relationships and influences.",
  32: "Indicates a quest for hidden knowledge and the importance of protecting your digital accounts and personal information.",
  33: "Encouraging the embrace of contradictions and mysteries in the digital world, this card signifies the wisdom that can be found in complexity.",
  34: "Suggesting a need to embrace ambiguity and navigate situations with multiple possible outcomes in the digital world, this card represents adaptability and open-mindedness.",
  35: "Signifying a period of asserting authority and taking charge in the digital realm, this card represents leadership and control.",
  36: "Signifying the importance of understanding and addressing hidden vulnerabilities in the digital space, this card represents awareness and vigilance.",
};

// Create a variable to keep track of the main text
let mainTextIndex = 0;

// Function to update the main text
function updateMainText() {
  const mainTexts = [
    "Select another card, for it shall embody the essence of your days to come.",
    "One more, to unveil the veiled whispers of your digital destiny.",
    "Reflect on the revealed cards, as they echo the chapters of your digital journey.",
    // Add more main texts as needed
  ];

  // Add a delay of 500 milliseconds (adjust as needed)
  setTimeout(() => {
    // Update the main text
    document.getElementById("ask-text").textContent = mainTexts[mainTextIndex];
    mainTextIndex = (mainTextIndex + 1) % mainTexts.length; // Cycle through texts
  }, 500);
}

// Create a unique random set of cards
const uniqueRandomCards = [];
while (uniqueRandomCards.length < 3) {
  const randomIndex = Math.floor(Math.random() * cardValues.length);
  const cardValue = cardValues.splice(randomIndex, 1)[0];
  uniqueRandomCards.push(cardValue);
}

// Assuming you have an array of cards somewhere in your code
// For example, you can define it like this:
const cards = document.querySelectorAll(".card-grid > div");

// Update event listeners for each card
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Check if the card has already been revealed
    if (card.classList.contains("revealed")) {
      return;
    }

    // Get the unique card value based on the clicked index
    const cardValue = uniqueRandomCards[index];

    // Get the descriptive text associated with the card
    const cardDescription = cardDescriptions[cardValue];

    // Change the back of the card to a randomly chosen front from the unique set
    card.querySelector("img").src = `../img/card${cardValue}.jpg`;

    // Add a class to mark the card as revealed
    card.classList.add("revealed");

    // Add a delay of 500 milliseconds (adjust as needed)
    setTimeout(() => {
      // Open the modal with the selected card's value and descriptive text
      openModal(cardValue, cardDescription);
    }, 800);
  });
});

// Update the openModal function to include descriptive text
function openModal(cardValue, cardDescription) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  var modalText = document.getElementById("modalText");

  // Construct the path for the larger image
  var imagePath = `../img/card${cardValue}.jpg`;

  // Load the larger image and descriptive text
  modalImage.src = imagePath;
  modalText.textContent = cardDescription;

  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  // Update the main text
  updateMainText();
}
