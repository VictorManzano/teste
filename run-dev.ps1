$ErrorActionPreference = "Stop"

$nodeExe = "C:\Program Files\nodejs\node.exe"
$npmCmd = "C:\Program Files\nodejs\npm.cmd"

if (-not (Test-Path $nodeExe) -or -not (Test-Path $npmCmd)) {
  Write-Host "Node.js nao encontrado em C:\Program Files\nodejs." -ForegroundColor Red
  Write-Host "Instale o Node.js LTS e execute novamente." -ForegroundColor Yellow
  exit 1
}

$env:Path = "C:\Program Files\nodejs;$env:Path"

if (-not (Test-Path ".\node_modules")) {
  Write-Host "Instalando dependencias..." -ForegroundColor Cyan
  & $npmCmd install
}

Write-Host "Iniciando Vite em http://127.0.0.1:5173 ..." -ForegroundColor Green
& $npmCmd run dev -- --host 127.0.0.1 --port 5173
