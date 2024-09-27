// Create the container div
const container = document.createElement('div');
container.id = 'social-insight-pro-container';

// Set the inner HTML
container.innerHTML = `
  <div class="sip-header">
    <h2>Social Insight Pro</h2>
    <span id="sip-close">&times;</span>
  </div>
  <div class="sip-body">
    <input type="text" id="sip-username" placeholder="Enter username">
    <button id="sip-submit">Submit</button>
  </div>
`;

// Append the container to the body
document.body.appendChild(container);

// Handle the close button
document.getElementById('sip-close').addEventListener('click', () => {
  container.style.display = 'none';
});

// Handle the submit button
document.getElementById('sip-submit').addEventListener('click', () => {
  const username = document.getElementById('sip-username').value;
  if (username) {
    // Redirect or handle the username as needed
    // For example, open a new tab with the profiling page
    window.open(`https://www.facebook.com/${username}/about`, '_blank');
  } else {
    alert('Please enter a username.');
  }
});
