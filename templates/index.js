function saveText() {
  const name = document.getElementById('name').value;
  const text = document.getElementById('text').value;

  if (name && text) {
    const entry = { name: name, text: text };

    let texts = JSON.parse(localStorage.getItem('texts')) || [];
    texts.push(entry);
    localStorage.setItem('texts', JSON.stringify(texts));

    renderTexts();

  }

  document.getElementById('name').value = '';
}

function renderTexts() {
  const texts = JSON.parse(localStorage.getItem('texts')) || [];
  const submittedTextsDiv = document.getElementById('submittedTexts');
  submittedTextsDiv.innerHTML = '';
  texts.forEach(entry => {
    const p = document.createElement('p');
    p.textContent = `${entry.name}: ${entry.text}`;
    submittedTextsDiv.appendChild(p);
  });
}

window.onload = renderTexts;