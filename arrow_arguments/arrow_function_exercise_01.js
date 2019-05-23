// Select all the list items on the page and convert to array
  const items = Array.from(document.querySelectorAll('[data-time]'));
  // Filter for only the elements that contain the word 'Flexbox'
  const filtered = items
    .filter(item => item.textContent.includes('Flexbox'))
    // map down to a list of time strings
    .map(item => item.dataset.time)
    // map to an array of seconds
    .map(timecode => {
      const parts = timecode.split(':').map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
    })
    // reduce to get total
    .reduce((runningTotal, seconds) => runningTotal + seconds);
  console.log(filtered);
  // This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
