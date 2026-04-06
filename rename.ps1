$content = Get-Content "index.html" -Encoding UTF8 -Raw

# Replace JSON-LD name
$content = $content -replace 'Yeiny%20fotógrafa%201\.jpg', 'Yeiny-fotógrafa-1.jpg'

# We match any string starting with ./public/assets/ and replace spaces inside it
$pattern = '(?<prefix>[\''"(]\.\/public\/assets\/)(?<path>[^''")]+)(?<suffix>[\''")])'

$evaluator = {
    param($match)
    $prefix = $match.Groups['prefix'].Value
    $path = $match.Groups['path'].Value
    $suffix = $match.Groups['suffix'].Value
    $newPath = $path -replace ' ', '-'
    return $prefix + $newPath + $suffix
}

$content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $evaluator)

Set-Content "index.html" -Value $content -Encoding UTF8
Write-Host "Done"
