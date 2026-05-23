$directory = "c:\Users\User\Pictures\prodcalixto FUNK"
$colors_to_replace = @{
    '#fbbf24' = '#1389f6';
    '#fcd34d' = '#1389f6';
    '#f59e0b' = '#1389f6';
    '#facc15' = '#1389f6';
    '#b45309' = '#1389f6';
    '#ffc107' = '#1389f6';
    '251, 191, 36' = '19, 137, 246';
    '252, 211, 77' = '19, 137, 246';
    '180, 83, 9' = '19, 137, 246';
    '255, 193, 7' = '19, 137, 246'
}

$files = Get-ChildItem -Path $directory -Recurse -Include *.html, *.css, *.js

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $original = $content
    foreach ($key in $colors_to_replace.Keys) {
        $content = $content -ireplace $key, $colors_to_replace[$key]
    }
    if ($original -cne $content) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($file.FullName)"
    }
}
