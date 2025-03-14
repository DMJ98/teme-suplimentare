let root = document.documentElement;
let rulesContainer = document.getElementById('rulesContainer');
let rulesButton = document.getElementById('rulesButton');
let closeButtonRules = document.getElementById('closeRulesContainer');
let playableSection = document.getElementById('playableSection');
let signsContainer = document.getElementById('signsContainer');
let iconsBtn = {
  spock: document.getElementById('spockButton'),
  scissors: document.getElementById('scissorsButton'),
  paper: document.getElementById('paperButton'),
  rock: document.getElementById('rockButton'),
  lizard: document.getElementById('lizardButton'),
};
let containerIcons = {
  friendlyContainer: document.getElementById('friendlyContainer'),
  iconStyleF: document.getElementById('fIconStyle'),
  friendlyIcon: document.getElementById('friendlyImage'),
  enemyIcon: document.getElementById('enemyImage'),
  enemyContainer: document.getElementById('enemyContainer'),
  iconStyleE: document.getElementById('eIconStyle'),
  messageWinLose: document.getElementById('messageWinLose'),
  playAgainBtn: document.getElementById('playAgain'),
};
let isBtnIconClicked;
let randomChoosing = Math.floor(Math.random() * 5);
let scoreTxt = document.getElementById('score');
let scoreNr = 0;

rulesButton.onclick = function () {
  rulesContainer.style.display = 'block';
  let windowWidth = window.innerWidth;
  let rulesContainerWidth = rulesContainer.offsetWidth;
  let leftValue = (windowWidth - rulesContainerWidth) / 2;
  rulesContainer.style.left = leftValue + 'px';
};

closeButtonRules.onclick = function () {
  rulesContainer.style.display = 'none';
};

function resize() {
  let windowWidth = window.innerWidth;
  let rulesContainerWidth = rulesContainer.offsetWidth;
  let leftValue = (windowWidth - rulesContainerWidth) / 2;
  rulesContainer.style.left = leftValue + 'px';
}

window.onresize = resize;

iconsBtn.spock.addEventListener('click', () => {
  isBtnIconClicked = true;
  playSection();
  containerIcons.friendlyIcon.src = './assets/icon-spock.svg';
  friendlyContainer.style.backgroundImage =
    getComputedStyle(root).getPropertyValue('--spock-gradient');

  setTimeout(function () {
    if (randomChoosing === 0) {
      containerIcons.messageWinLose.textContent = 'TIE';
    } else if (randomChoosing !== 1 && randomChoosing !== 3) {
      containerIcons.messageWinLose.textContent = 'YOU LOSE';
      scoreNr--;
      console.log('asd', randomChoosing);
      scoreTxt.textContent = scoreNr;
    } else {
      containerIcons.messageWinLose.textContent = 'YOU WIN';
      scoreNr++;
      scoreTxt.textContent = scoreNr;
    }
  }, 1100);
});
iconsBtn.scissors.addEventListener('click', () => {
  isBtnIconClicked = true;
  playSection();
  containerIcons.friendlyIcon.src = './assets/icon-scissors.svg';
  friendlyContainer.style.backgroundImage = getComputedStyle(
    root
  ).getPropertyValue('--scissors-gradient');

  setTimeout(function () {
    if (randomChoosing === 1) {
      containerIcons.messageWinLose.textContent = 'TIE';
    } else if (randomChoosing !== 2 && randomChoosing !== 4) {
      containerIcons.messageWinLose.textContent = 'YOU LOSE';
      scoreNr--;
      scoreTxt.textContent = scoreNr;
    } else {
      containerIcons.messageWinLose.textContent = 'YOU WIN';
      scoreNr++;
      scoreTxt.textContent = scoreNr;
    }
  }, 1100);
});
iconsBtn.paper.addEventListener('click', () => {
  isBtnIconClicked = true;
  playSection();
  containerIcons.friendlyIcon.src = './assets/icon-paper.svg';
  friendlyContainer.style.backgroundImage =
    getComputedStyle(root).getPropertyValue('--paper-gradient');

  setTimeout(function () {
    if (randomChoosing === 2) {
      containerIcons.messageWinLose.textContent = 'TIE';
    } else if (randomChoosing !== 0 && randomChoosing !== 3) {
      containerIcons.messageWinLose.textContent = 'YOU LOSE';
      scoreNr--;
      scoreTxt.textContent = scoreNr;
    } else {
      containerIcons.messageWinLose.textContent = 'YOU WIN';
      scoreNr++;
      scoreTxt.textContent = scoreNr;
    }
  }, 1100);
});
iconsBtn.rock.addEventListener('click', () => {
  isBtnIconClicked = true;
  playSection();
  containerIcons.friendlyIcon.src = './assets/icon-rock.svg';
  friendlyContainer.style.backgroundImage =
    getComputedStyle(root).getPropertyValue('--rock-gradient');

  setTimeout(function () {
    if (randomChoosing === 3) {
      containerIcons.messageWinLose.textContent = 'TIE';
    } else if (randomChoosing !== 4 && randomChoosing !== 1) {
      containerIcons.messageWinLose.textContent = 'YOU LOSE';
      scoreNr--;
      scoreTxt.textContent = scoreNr;
    } else {
      containerIcons.messageWinLose.textContent = 'YOU WIN';
      scoreNr++;
      scoreTxt.textContent = scoreNr;
    }
  }, 1100);
});
iconsBtn.lizard.addEventListener('click', () => {
  isBtnIconClicked = true;
  playSection();
  containerIcons.friendlyIcon.src = './assets/icon-lizard.svg';
  friendlyContainer.style.backgroundImage =
    getComputedStyle(root).getPropertyValue('--lizard-gradient');

  setTimeout(function () {
    if (randomChoosing === 4) {
      containerIcons.messageWinLose.textContent = 'TIE';
    } else if (randomChoosing !== 0 && randomChoosing !== 2) {
      containerIcons.messageWinLose.textContent = 'YOU LOSE';
      scoreNr--;
      scoreTxt.textContent = scoreNr;
    } else {
      containerIcons.messageWinLose.textContent = 'YOU WIN';
      scoreNr++;
      scoreTxt.textContent = scoreNr;
    }
  }, 1100);
});

const playSection = () => {
  if (isBtnIconClicked === true) {
    playableSection.style.display = 'none';
    if (window.innerWidth >= 1024) {
      signsContainer.style.display = 'grid';
    } else {
      signsContainer.style.display = 'flex';
    }
    containerIcons.playAgainBtn.disabled = true;
    containerIcons.iconStyleF.style.backgroundColor = 'white';
    containerIcons.iconStyleE.style.backgroundColor = 'white';
    setTimeout(function () {
      enemyRandomChoose();
    }, 1000);
  }
};

const enemyRandomChoose = () => {
  containerIcons.iconStyleE.style.display = 'block';
  containerIcons.playAgainBtn.disabled = false;
  switch (randomChoosing) {
    case 0:
      containerIcons.enemyIcon.src = './assets/icon-spock.svg';
      enemyContainer.style.backgroundImage =
        getComputedStyle(root).getPropertyValue('--spock-gradient');
      break;
    case 1:
      containerIcons.enemyIcon.src = './assets/icon-scissors.svg';
      enemyContainer.style.backgroundImage = getComputedStyle(
        root
      ).getPropertyValue('--scissors-gradient');
      break;
    case 2:
      containerIcons.enemyIcon.src = './assets/icon-paper.svg';
      enemyContainer.style.backgroundImage =
        getComputedStyle(root).getPropertyValue('--paper-gradient');
      break;
    case 3:
      containerIcons.enemyIcon.src = './assets/icon-rock.svg';
      enemyContainer.style.backgroundImage =
        getComputedStyle(root).getPropertyValue('--rock-gradient');
      break;
    case 4:
      containerIcons.enemyIcon.src = './assets/icon-lizard.svg';
      enemyContainer.style.backgroundImage =
        getComputedStyle(root).getPropertyValue('--lizard-gradient');
      break;
  }
};

containerIcons.playAgainBtn.addEventListener('click', () => {
  signsContainer.style.display = 'none';
  containerIcons.iconStyleE.style.display = 'none';
  enemyContainer.style.backgroundImage = 'none';
  randomChoosing = Math.floor(Math.random() * 5);
  containerIcons.messageWinLose.textContent = 'Waiting...';
  playableSection.style.display = 'grid';
});
