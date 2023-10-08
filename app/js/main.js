const tabsBtn = document.querySelectorAll(".tab-btn");
const tabItems = document.querySelectorAll(".tab__body-item");

tabsBtn.forEach(function (item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove('active');
    });
    tabItems.forEach(function (item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  })
});

const question = document.querySelector(".commission__question");
const label = document.querySelector(".commission__label");

question.addEventListener('mouseover', () => {
  label.classList.add('active')
})
// label.addEventListener('mouseout', () => {
//   label.classList.remove('active')
// })