$assetsDir = "public\assets"
$files = Get-ChildItem -Path $assetsDir -File

foreach ($file in $files) {
    $newName = $file.Name
    
    # Check for the broken replacement character and replace it logically
    if ($newName -match 'quincea.os') {
        $newName = $newName -replace 'quincea.os', 'quinceanos'
    }
    if ($newName -match 'fot.grafa') {
        $newName = $newName -replace 'fot.grafa', 'fotografa'
    }
    
    # Just in case, replace any non standard chars with empty or dash
    # $newName = $newName -replace '[^a-zA-Z0-9.\-]', ''
    
    if ($newName -ne $file.Name) {
        Rename-Item -Path $file.FullName -NewName $newName
        Write-Host "Renamed: $($file.Name) -> $newName"
    }
}
