//secret codes section---------------------------------------------------

//get all like and dislike buttons
const likeButtons = document.querySelectorAll('.likeBtn');
const dislikeButtons = document.querySelectorAll('.dislikeBtn');

//set a reference to the like counter description
const likeCounterDescription = document.querySelector('.likeCounterDescription');

let likes = 0;
let dislikes = 0;

//update the text
function updateDescription() {
  likeCounterDescription.textContent = `You Liked ${likes} items and hated ${dislikes} items`;
}

//add event listeners to like buttons
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    likes++;
    updateDescription();
    button.parentNode.parentNode.style.backgroundColor = 'rgb(123, 175, 170)';

    //append a message to the bottom of screen, so users can keep track of what they liked and didnt
    const refToMessages = document.querySelector('.messages');
    const message = document.createElement('p');
    var code = button.parentNode.parentNode.querySelector('strong').innerText.replace('code: ', ''); //get rid of "code" at begginning of each code
    message.textContent = `You liked ${code}`;
    refToMessages.appendChild(message);
  });
});

//add event listeners to dislike buttons
dislikeButtons.forEach(button => {
  button.addEventListener('click', () => {
    dislikes++;
    updateDescription();
    button.parentNode.parentNode.style.backgroundColor = 'rgb(208, 91, 91)';

    //append a message to the bottom of screen, so users can keep track of what they liked and didnt
    const refToMessages = document.querySelector('.messages');
    const message = document.createElement('p');
    var code = button.parentNode.parentNode.querySelector('strong').innerText.replace('code: ', '');
    message.textContent = `You hated ${code}`;
    refToMessages.appendChild(message);
  });
});

// Add event listener to start over button
document.querySelector('.startover').addEventListener('click', () => {
  likes = 0;
  dislikes = 0;
  updateDescription();
  document.querySelectorAll('.codeElement').forEach(div => {
     div.style.backgroundColor = 'initial'; // Reset background color
   });
   //clear all messages made from buttons
   document.querySelector('.messages').innerHTML = '';
});