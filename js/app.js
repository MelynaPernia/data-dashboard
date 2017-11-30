window.addEventListener('load', function(event) {
  var country = document.querySelectorAll('.country');
  var countryChile = document.querySelector('#chile');
  var countryPeru = document.querySelector('#peru');
  var countryMexico = document.querySelector('#mexico');

  function showCountry(event) {
  // console.log(event.target.nextElementSibling);
    event.target.nextElementSibling.classList.toggle('display-none');
  }


  countryChile.addEventListener('click', showCountry);
  countryPeru.addEventListener('click', showCountry);
  countryMexico.addEventListener('click', showCountry);

  /* TABS */

  var tabs = document.querySelectorAll('.tab');

  var overviewSection = document.querySelector('#overview');
  var studentsSection = document.querySelector('#students');
  var teachersSection = document.querySelector('#teachers');

  function showTab(event) {
    var tab = event.target.textContent;
    switch (true) {
    case (tab === 'Overview'):
      overviewSection.classList.remove('display-none');
      studentsSection.classList.add('display-none');
      teachersSection.classList.add('display-none');
      break;
    case (tab === 'Students'):
      overviewSection.classList.add('display-none');
      studentsSection.classList.remove('display-none');
      teachersSection.classList.add('display-none');
      break;
    case (tab === 'Teachers'):
      overviewSection.classList.add('display-none');
      studentsSection.classList.add('display-none');
      teachersSection.classList.remove('display-none');
      break;
    default:
      overviewSection.classList.add('display-none');
      studentsSection.classList.add('display-none');
      teachersSection.classList.add('display-none');
      break;
    }
  }


  console.log(tabs);
  for (var i = 0;i < tabs.length;i++) {
    tabs[i].addEventListener('click', showTab);
  }


});
