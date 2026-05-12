$content = Get-Content "index.html" -Encoding UTF8 -Raw

# Get all file names from the directory
$files = Get-ChildItem -Path "public\assets" -File | Select-Object -ExpandProperty Name

# For each image path inside index.html, we replace it with the exact matched filename
$pattern = '(?<prefix>[\''"(]\.\/public\/assets\/)(?<path>[^''")]+)(?<suffix>[\''")])'

$evaluator = {
    param($match)
    $prefix = $match.Groups['prefix'].Value
    $path = $match.Groups['path'].Value
    $suffix = $match.Groups['suffix'].Value
    
    # URL decode to handle %20 if any, then find matching case in file system
    $cleanPath = $path -replace '%20', ' '
    
    # We strip accents from the search path just in case we need a fallback match
    $normalizedSearch = $cleanPath.Normalize([System.Text.NormalizationForm]::FormD) -replace '\p{M}', ''
    
    $exactMatch = $files | Where-Object { $_ -eq $cleanPath } | Select-Object -First 1
    
    if (-not $exactMatch) {
         # Try case insensitive fallback
         $exactMatch = $files | Where-Object { $_.ToLower() -eq $cleanPath.ToLower() } | Select-Object -First 1
    }
    
    if (-not $exactMatch) {
         # Try stripped accents fallback
         $exactMatch = $files | Where-Object { 
             $_.Normalize([System.Text.NormalizationForm]::FormD).ToLower() -replace '\p{M}', '' -eq $normalizedSearch.ToLower() 
         } | Select-Object -First 1
    }

    if ($exactMatch) {
        $path = $exactMatch
    }
    
    return $prefix + $path + $suffix
}

$content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, $evaluator)

Set-Content "index.html" -Value $content -Encoding UTF8
Write-Host "Paths updated to exact filesystem match."
