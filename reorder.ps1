$path = "c:\Users\User\Downloads\prodcalixto\index.html"
$content = [System.IO.File]::ReadAllText($path)

$split1 = $content -split '<!-- HERO SECTION -->'
$pre = $split1[0]
$rest1 = $split1[1]

$split2 = $rest1 -split '<!-- BLOCO DA DOR -->'
$hero = $split2[0]
$rest2 = $split2[1]

$split3 = $rest2 -split '<!-- ABOUT PROD CALIXTO -->'
$pain = $split3[0]
$rest3 = $split3[1]

$split4 = $rest3 -split '<!-- PORTFOLIO / MÚSICAS -->'
$about = $split4[0]
$rest4 = $split4[1]

$split5 = $rest4 -split '<!-- AUDIO PREVIEWS -->'
$port = $split5[0]
$rest5 = $split5[1]

$split6 = $rest5 -split '<!-- FAQ SECTION -->'
$audio = $split6[0]
$rest6 = $split6[1]

$split7 = $rest6 -split '<!-- PROVA SOCIAL -->'
$faq = $split7[0]
$rest7 = $split7[1]

$split8 = $rest7 -split '<!-- GARANTIA -->'
$social = $split8[0]
$rest8 = $split8[1]

$split9 = $rest8 -split '<!-- CTA FINAL -->'
$guarantee = $split9[0]
$rest9 = $split9[1]

$split10 = $rest9 -split '<!-- RODAPÉ -->'
$cta = $split10[0]
$post = '<!-- RODAPÉ -->' + $split10[1]

$newContent = $pre + `
    "<!-- HERO SECTION -->" + $hero + `
    "<!-- PROVA SOCIAL -->" + $social + `
    "<!-- ABOUT PROD CALIXTO -->" + $about + `
    "<!-- PORTFOLIO / MÚSICAS -->" + $port + `
    "<!-- AUDIO PREVIEWS -->" + $audio + `
    "<!-- BLOCO DA DOR -->" + $pain + `
    "<!-- PRIMEIRA OFERTA -->" + $cta + `
    "<!-- GARANTIA -->" + $guarantee + `
    "<!-- FAQ SECTION -->" + $faq + `
    "<!-- CTA FINAL -->" + $cta + `
    $post

[System.IO.File]::WriteAllText($path, $newContent, [System.Text.Encoding]::UTF8)

Write-Host "Reordenacao concluida com sucesso!"
