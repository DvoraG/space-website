// 'active' status changes
export const activeStatusChanges = (tabList, currentTab) => {
  const prevActiveTab = tabList.querySelector('[aria-selected="true"]');
  prevActiveTab.setAttribute('aria-selected', false);
  prevActiveTab.classList.replace('text-white', 'text-accent');

  currentTab.setAttribute('aria-selected', true);
  return currentTab.textContent.trim();
};

// 'focus' status changes

let tabFocus = 0;

export const focusChange = (keycode, tabs) => {
  const keyDownLeft = 37;
  const keyDownRight = 39;

  if (keycode === keyDownLeft || keycode === keyDownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1);

    if (keycode === keyDownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (keycode === keyDownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }
    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
  }
};
