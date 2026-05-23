const fs = require('fs');

const filePath = 'c:\\Users\\User\\Downloads\\prodcalixto\\index.html';
const c = fs.readFileSync(filePath, 'utf-8');

const hero = c.split('<!-- HERO SECTION -->')[1].split('<!-- BLOCO DA DOR -->')[0];
const pain = c.split('<!-- BLOCO DA DOR -->')[1].split('<!-- ABOUT PROD CALIXTO -->')[0];
const about = c.split('<!-- ABOUT PROD CALIXTO -->')[1].split('<!-- PORTFOLIO / MÚSICAS -->')[0];
const port = c.split('<!-- PORTFOLIO / MÚSICAS -->')[1].split('<!-- AUDIO PREVIEWS -->')[0];
const audio = c.split('<!-- AUDIO PREVIEWS -->')[1].split('<!-- FAQ SECTION -->')[0];
const faq = c.split('<!-- FAQ SECTION -->')[1].split('<!-- PROVA SOCIAL -->')[0];
const social = c.split('<!-- PROVA SOCIAL -->')[1].split('<!-- GARANTIA -->')[0];
const guarantee = c.split('<!-- GARANTIA -->')[1].split('<!-- CTA FINAL -->')[0];
const cta = c.split('<!-- CTA FINAL -->')[1].split('<!-- RODAPÉ -->')[0];

const pre = c.split('<!-- HERO SECTION -->')[0];
const post = '<!-- RODAPÉ -->' + c.split('<!-- RODAPÉ -->')[1];

const newC = pre + 
    '<!-- HERO SECTION -->' + hero + 
    '<!-- PROVA SOCIAL -->' + social + 
    '<!-- ABOUT PROD CALIXTO -->' + about + 
    '<!-- PORTFOLIO / MÚSICAS -->' + port + 
    '<!-- AUDIO PREVIEWS -->' + audio + 
    '<!-- BLOCO DA DOR -->' + pain + 
    '<!-- PRIMEIRA OFERTA -->' + cta + 
    '<!-- GARANTIA -->' + guarantee + 
    '<!-- FAQ SECTION -->' + faq + 
    '<!-- CTA FINAL -->' + cta + 
    post;

fs.writeFileSync(filePath, newC, 'utf-8');
console.log('Reordenacao concluida com sucesso!');
