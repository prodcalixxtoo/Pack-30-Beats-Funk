$urls = @(
    'https://on.soundcloud.com/uRwTJqZJvgDLtHoAiS',
    'https://on.soundcloud.com/jkc8KULNqPW415CBJ9',
    'https://on.soundcloud.com/IDQIKPnaX0dOIsd40y',
    'https://on.soundcloud.com/7VvsCMmtqqmSBz17T8',
    'https://on.soundcloud.com/sDkpXbIwVr03yk7zdo',
    'https://on.soundcloud.com/ukOZL5pxR3BF8zEgv3'
)

foreach ($u in $urls) {
    try {
        $req = [System.Net.HttpWebRequest]::Create($u)
        $req.AllowAutoRedirect = $false
        $res = $req.GetResponse()
        Write-Host "$u -> $($res.Headers['Location'])"
    } catch {
        Write-Host "$u -> $($_.Exception.Response.Headers['Location'])"
    }
}
