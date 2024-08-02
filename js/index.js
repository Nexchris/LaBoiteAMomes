document.addEventListener('DOMContentLoaded', function () {
    const widgetContainer = document.querySelector('.index');
  
    if (widgetContainer) {
      widgetContainer.innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #f5f5f5;
      color: #333;
      overflow-y: visible;
    }
  
    .homecontainer {
      display: flex;
  
    }
  
    @media (max-width: 768px) {
      .homecontainer {
        display: block;
      }
    }
  
    .leftscreen, .rightscreen {
      width: 50vw;
      height: 100vh;
      position: relative;
      overflow: hidden;
      transition: width 0.5s ease;
    }
  
    .leftscreen::before, .rightscreen::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1;
      transition: background-color 0.5s ease;
      pointer-events: none;
    }
  
    .leftscreen.expanded, .rightscreen.expanded {
      width: 85vw;
    }
  
    .leftscreen.expanded::before, .rightscreen.expanded::before {
      background-color: rgba(0, 0, 0, 0);
    }
  
    @media (max-width: 768px) {
      .leftscreen, .rightscreen {
        height: 50vh;
        width: 100vw;
      }
  
      .leftscreen.expanded, .rightscreen.expanded {
        width: 100vw;
      }
    }
  
    .video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .text-container {
      position: absolute;
      width: 30vw;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 2;
      padding: 20px;
      border-radius: 10px;
    }
  
    @media (max-width: 768px) {
      .text-container {
        width: auto;
        height: auto;
      }
    }
  
    @media (min-width: 800px) and (max-width: 1400px) {
      .text-container {
        width: fit-content;
        height: max-content;
      }
    }
  
    .title, .title2 {
      margin: 0;
      font-size: 7vh;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-weight: bold;
    }
  
    @media (max-width: 768px) {
      .title, .title2 {
        font-size: x-large;
      }
    }
  
    @media (min-width: 800px) and (max-width: 1400px) {
      .title {
        font-size: 4vh;
      }
    }
  
    .text {
      margin: 0;
      margin-bottom: 2vh;
      font-size: 2.5vh;
      color: white;
      cursor: pointer;
      text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
    }
  
    @media (min-width: 0px) and (max-width: 1400px) {
      .text {
        display: none;
      }
    }
  
  
  
    .button {
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      transition-duration: 0.4s;
    }
  
    .button:hover {
      background-color: #111;
    }
  
   
    /* Styles for the image */
    .center-image {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65vw; /* Adjust width as needed */
      height: auto;
      z-index: 10000; /* Higher than the fade-overlay */
      animation: fadeOut 1s forwards;
    }
  
    @media (min-width: 500px) and (max-width: 1400px) {
      .center-image{
          width: 30vw;
      }
    }
  
  
    .jtpl-section-main__inner, .jtpl-sidebar__inner {
     max-width: -webkit-fill-available;
    }
  
    .jtpl-footer__inner, .jtpl-section-main__inner, .jtpl-sidebar__inner {
      padding: 0;
    }
  
    .jtpl-header {
      margin: 0;
    }
  
    .n {
      /* padding: 5px; */
    }
  
    div.flexmodul, div.n {
      padding: 0;
    }
  
    div.n {
      /* padding: 5px; */
    }
  
    .cc-imagewrapper {
      opacity: 0;
      display: none;
      position: absolute;
    }
  
    
  </style>
  <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  <div class="homecontainer">
    <div class="leftscreen" id="leftscreen">
      <video class="video" id="leftVideo" src="https://668ac80ef0d0921d22c25ed4--papaya-lily-05aea5.netlify.app/soustension.mp4" muted loop></video>
      <div class="text-container">
        <div class="title" id="leftTitle">CinéBAM</div>
        <a href=""></a>
        <p class="text" id="leftContent">Suivez vos cours en ligne sur la plateforme Cinebam, vous pourrez apprendre à la manière des pros tout en travaillant sur vos projets. Nos formations sont accessibles et adaptées à tous les niveaux de compétences.</p>
        <a href="https://www.boitamomes.fr/productions/" class="button">Voir plus</a>
      </div>
    </div>
    <div class="rightscreen" id="rightscreen">
      <video class="video" id="rightVideo" src="https://668ac80ef0d0921d22c25ed4--papaya-lily-05aea5.netlify.app/boiteamomes.mp4" muted loop></video>
      <div class="text-container">
        <div class="title2" id="rightTitle">Boîte à mômes</div>
        <p class="text" id="rightContent">Entrez dans le monde magique du théâtre avec La Boîte à Mômes ! Que vous soyez débutant, amateur ou professionnel, nos ateliers de théâtre vous offrent l'opportunité unique de développer vos talents d'acteurs.</p>
        <a href="https://www.boitamomes.fr/ateliers/" class="button">Voir plus</a>
      </div>
    </div>
  </div>
  
  
  `;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const leftscreen = document.getElementById('leftscreen');
    const rightscreen = document.getElementById('rightscreen');
    const leftVideo = document.getElementById('leftVideo');
    const rightVideo = document.getElementById('rightVideo');
  
    leftscreen.addEventListener('mouseover', function() {
      leftscreen.classList.add('expanded');
      leftVideo.play();
    });
  
    leftscreen.addEventListener('mouseout', function() {
      leftscreen.classList.remove('expanded');
      leftVideo.pause();
    });
  
    rightscreen.addEventListener('mouseover', function() {
      rightscreen.classList.add('expanded');
      rightVideo.play();
    });
  
    rightscreen.addEventListener('mouseout', function() {
      rightscreen.classList.remove('expanded');
      rightVideo.pause();
    });
  
    // Static data (replace with your own data)
  
  });