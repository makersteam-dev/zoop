// Get all .creator-item elements
const creatorItems = document.querySelectorAll('.creator-item');

// Loop through each .creator-item element
creatorItems.forEach((item: Element) => {
  // Get the value of the [mt-creator] attribute
  const creatorName = item.getAttribute('mt-creator');

  // Find the [mt-creator="full-name"] element inside the current .creator-item element
  const fullNameElem = item.querySelector('[mt-creator="full-name"]') as HTMLElement;

  // Update the text of the [mt-creator="full-name"] element to the value of the [mt-creator] attribute
  fullNameElem.textContent = creatorName;

  // Get the value of the [mt-creator-link] attribute
  const creatorLink = item.getAttribute('mt-creator-link');

  // Find the [mt-creator="link"] element inside the current .creator-item element
  const linkElem = item.querySelector('[mt-creator="link"]') as HTMLAnchorElement;

  // Update the href of the [mt-creator="link"] element to the value of the [mt-creator-link] attribute, if creatorLink is not null or undefined
  if (creatorLink !== null) {
    linkElem.href = creatorLink;
  }

  console.log(creatorName);
  console.log(fullNameElem);
  console.log(creatorLink);
});
