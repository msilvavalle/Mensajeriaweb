const contacts = document.querySelectorAll('.contact');
const hero = document.getElementById('hero');
const chat = document.getElementById('chat');
const chatTitle = document.getElementById('chatTitle');
const chatThumb = document.getElementById('chatThumb');
const messages = document.getElementById('messages');
const input = document.getElementById('inputMsg');
const form = document.getElementById('composer');

contacts.forEach(contact => {
  contact.addEventListener('click', e => {
    e.preventDefault();
    const name = contact.dataset.name;
    const thumb = contact.querySelector('.contact__thumb').textContent.trim();
    hero.classList.add('hidden');
    chat.classList.remove('hidden');
    chatTitle.textContent = `Conversación con ${name}`;
    chatThumb.textContent = thumb || name.charAt(0);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const msg = document.createElement('div');
  msg.className = 'msg msg--out';
  msg.textContent = text;
  messages.appendChild(msg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
});
