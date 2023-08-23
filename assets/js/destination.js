import { activeStatusChanges, focusChange } from './tab.js';
import { fetchData } from './get-data.js';

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

// active change

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const destination = activeStatusChanges(tabList, tab);
    getData(destination, 'destinations');
  });
});

let dataSet;

const getData = async (dest, site) => {
  dataSet = await fetchData(site);
  const data = dataSet.find((item) => {
    return item.name === dest;
  });
  renderData(data);
};
// focus change

tabList.addEventListener('keydown', tabFocusChange);

function tabFocusChange(e) {
  focusChange(e.keyCode, tabs);
}

function renderData({ name, images, description, distance, travel }) {
  const planetWebp = document.querySelector('picture > source');
  const planetPng = document.querySelector('picture > img');
  const planetName = document.querySelector('#destination-title');
  const planetDescription = document.querySelector('#destination-details');
  const planetDistance = document.querySelector('#distance');
  const planetTravelTime = document.querySelector('#travel-time');

  planetWebp.setAttribute('srcset', images.webp);
  planetPng.setAttribute('src', images.png);

  planetPng.setAttribute('alt', name.toLowerCase());
  planetName.textContent = name;
  planetDescription.textContent = description;
  planetDistance.textContent = distance;
  planetTravelTime.textContent = travel;
}
