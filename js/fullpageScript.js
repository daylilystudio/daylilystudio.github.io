// Fullpage設定
var myFullpage = {
  licenseKey: 'gplv3-license',
	menu: 'nav',
	anchors: ['home', 'about', 'experience', 'skill', 'works', 'contact', 'footer'],
    // navigationTooltips: ['Top', 'About', 'Experience', 'Skill', 'Works', 'Contact', 'Footer'],
	navigation: true, // 顯示導行列
	navigationPosition: "right", // 導行列位置
	css3: true,
	scrollingSpeed: 700,
	scrollOverflow: true,
    scrollOverflowReset: true,
	fitToSection: true,
	fitToSectionDelay: 500,
	keyboardScrolling: true,
	recordHistory: true,
	//events
  afterLoad: function (origin, destination, direction) {
      var loadedSection = this;
      //using anchorLink
      if (destination.anchor == 'experience') {
          document.querySelector('nav').style.display = "none"
      }else{
          document.querySelector('nav').style.display = "flex"
      }
      if (destination.anchor == 'home') {
          document.querySelector('.top').style.display = "none"
          document.querySelector('#fp-nav').style.display = "none"
      }else{
          document.querySelector('.top').style.display = "flex"
          document.querySelector('#fp-nav').style.display = "block"
      }
  }
}