import { activeStatusChanges, focusChange } from './tab.js';
import { fetchData } from './get-data.js';

const numIndicator = document.querySelector('[role="tablist"]');
const tabs = numIndicator.querySelectorAll('[role="tab"]');

tabs.forEach((num) => {
  num.addEventListener('click', () => {
    activeStatusChanges(numIndicator, num);
    const techItem = num.getAttribute('data-item');
    getData(techItem, 'technology');
  });
});

let dataSet;

const getData = async (technology, site) => {
  dataSet = await fetchData(site);
  const data = dataSet.find((item) => {
    return item.name === technology;
  });
  renderData(data);
};

numIndicator.addEventListener('keydown', tabFocusChange);

function tabFocusChange(e) {
  focusChange(e.keyCode, tabs);
}

function renderData({ name, images, description }) {
  const techImgLands = document.querySelector('picture > #img-landscape');
  const techImgPort = document.querySelector('picture > #img-portrait');
  const imgFallback = document.querySelector('picture > img');
  const techName = document.querySelector('#technology-title');
  const techDesc = document.querySelector('#technology-description');

  techImgLands.setAttribute('srcset', images.landscape);
  techImgPort.setAttribute('srcset', images.portrait);
  imgFallback.setAttribute('src', images.landscape);
  imgFallback.setAttribute('alt', name);
  techName.textContent = name;
  techDesc.textContent = description;
}
