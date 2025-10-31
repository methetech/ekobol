$port = 3005
$timeout = New-TimeSpan -Seconds 30
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()

while ($stopwatch.Elapsed -lt $timeout) {
    $process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -First 1
    if ($process) {
        Write-Host "Process with PID $($process) is using port $($port). Terminating..."
        Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
    } else {
        Write-Host "Port $($port) is free."
        break
    }
}

if ($process) {
    Write-Error "Failed to free port $($port) within the timeout period."
    exit 1
}