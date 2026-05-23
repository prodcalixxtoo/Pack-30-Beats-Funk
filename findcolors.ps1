$content = Get-Content "css\style.css"
$hex = [regex]::Matches($content, '#[0-9a-fA-F]{3,6}').Value | Sort-Object -Unique
Write-Host "HEX:"
$hex
$rgba = [regex]::Matches($content, 'rgba\([0-9\s,.]+\)').Value | Sort-Object -Unique
Write-Host "RGBA:"
$rgba
