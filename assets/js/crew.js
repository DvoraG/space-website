import { activeStatusChanges, focusChange } from './tab.js';
import { fetchData } from './get-data.js';

const dotIndicator = document.querySelector('[role="dot-indicators"]');
const dots = dotIndicator.querySelectorAll('[role="dot"]');

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const member = activeStatusChanges(dotIndicator, dot);
    getData(member, 'crew');
  });
});

let dataSet;

const getData = async (member, site) => {
  dataSet = await fetchData(site);
  const data = dataSet.find((item) => {
    return item.role === member;
  });
  renderData(data);
};

dotIndicator.addEventListener('keydown', dotFocusChange);

function dotFocusChange(e) {
  focusChange(e.keyCode, dots);
}

function renderData({ name, images, role, bio }) {
  const crewWebp = document.querySelector('picture > source');
  const crewPng = document.querySelector('picture > img');
  const crewName = document.querySelector('#crew-name');
  const crewRole = document.querySelector('#crew-role');
  const crewBio = document.querySelector('#crew-bio');

  crewWebp.setAttribute('srcset', images.webp);
  crewPng.setAttribute('src', images.png);

  crewPng.setAttribute('alt', name);
  crewName.textContent = name;
  crewRole.textContent = role;
  crewBio.textContent = bio;
}
