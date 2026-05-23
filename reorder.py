import os

file_path = r'c:\Users\User\Downloads\prodcalixto\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    c = f.read()

hero = c.split('<!-- HERO SECTION -->')[1].split('<!-- BLOCO DA DOR -->')[0]
pain = c.split('<!-- BLOCO DA DOR -->')[1].split('<!-- ABOUT PROD CALIXTO -->')[0]
about = c.split('<!-- ABOUT PROD CALIXTO -->')[1].split('<!-- PORTFOLIO / MÚSICAS -->')[0]
port = c.split('<!-- PORTFOLIO / MÚSICAS -->')[1].split('<!-- AUDIO PREVIEWS -->')[0]
audio = c.split('<!-- AUDIO PREVIEWS -->')[1].split('<!-- FAQ SECTION -->')[0]
faq = c.split('<!-- FAQ SECTION -->')[1].split('<!-- PROVA SOCIAL -->')[0]
social = c.split('<!-- PROVA SOCIAL -->')[1].split('<!-- GARANTIA -->')[0]
guarantee = c.split('<!-- GARANTIA -->')[1].split('<!-- CTA FINAL -->')[0]
cta = c.split('<!-- CTA FINAL -->')[1].split('<!-- RODAPÉ -->')[0]

pre = c.split('<!-- HERO SECTION -->')[0]
post = '<!-- RODAPÉ -->' + c.split('<!-- RODAPÉ -->')[1]

new_c = pre + \
    '<!-- HERO SECTION -->' + hero + \
    '<!-- PROVA SOCIAL -->' + social + \
    '<!-- ABOUT PROD CALIXTO -->' + about + \
    '<!-- PORTFOLIO / MÚSICAS -->' + port + \
    '<!-- AUDIO PREVIEWS -->' + audio + \
    '<!-- BLOCO DA DOR -->' + pain + \
    '<!-- PRIMEIRA OFERTA -->' + cta + \
    '<!-- GARANTIA -->' + guarantee + \
    '<!-- FAQ SECTION -->' + faq + \
    '<!-- CTA FINAL -->' + cta + \
    post

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_c)

print("Reordenacao concluida com sucesso!")
