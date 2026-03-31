/*
© 2026 West Hills Farm
Website code is MIT Licensed.
All content, images, and branding are copyrighted.
*/

// script.js

const englishBtn = document.getElementById('english-btn');
const spanishBtn = document.getElementById('spanish-btn');
const enSections = document.querySelectorAll('.en-lang');
const esSections = document.querySelectorAll('.es-lang');
const enLinks = document.querySelectorAll('.lang-link.en');
const esLinks = document.querySelectorAll('.lang-link.es');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Function to switch language
function showEnglish() {
    enSections.forEach(s => s.style.display = 'flex');
    esSections.forEach(s => s.style.display = 'none');
    enLinks.forEach(l => l.style.display = 'block');
    esLinks.forEach(l => l.style.display = 'none');
}

function showSpanish() {
    enSections.forEach(s => s.style.display = 'none');
    esSections.forEach(s => s.style.display = 'flex');
    enLinks.forEach(l => l.style.display = 'none');
    esLinks.forEach(l => l.style.display = 'block');
}

// Initial language: English
showEnglish();

englishBtn.addEventListener('click', showEnglish);
spanishBtn.addEventListener('click', showSpanish);

// Hamburger toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
