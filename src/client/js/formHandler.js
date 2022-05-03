import {URLcheck} from './URLcheck'
async function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value

  if (URLcheck(formText)) {
    await fetch('http://localhost:8081/sentiment', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({input: formText})
    })
    .then(res => res.json())
    .then(res => {
      updateUI(res);
    })
  } else {
    alert('Please enter a valid URL')
  }
}
// Update UI
const updateUI = (res) => {
  document.getElementById('Subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
  document.getElementById('Irony').innerHTML = `Irony: ${res.irony}`;
  document.getElementById('Confidence').innerHTML = `Confidence: ${res.confidence}`;
  document.getElementById('Agreement').innerHTML = `Agreement: ${res.agreement}`;
};

export { handleSubmit, updateUI };
