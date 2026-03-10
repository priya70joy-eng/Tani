const messages = [
    "Sotti na bole dicchis?🥲",
    "Sotti hobi na??🥺",
    " kiree   sotti na bole dicchis ?😓",
    "please akber bhebe dekh  , please...🙏🏼",
    "R  ekbar vebe ne please 😓! ",
    "Amar Proti ki kono feelings nei.😩 ",
    "Sotti ki kono fealings nei 🥺?",
    "Amio r 5 ta bondhur motoi ??😭 ",
    "Sorry re , Ami r jiggas korbo na😩.",
    "Tobe aj toke ha boltei hobe 😉"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
