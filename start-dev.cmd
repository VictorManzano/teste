@echo off
setlocal

set "NODE_DIR=C:\Program Files\nodejs"
set "NPM_CMD=%NODE_DIR%\npm.cmd"

if not exist "%NPM_CMD%" (
  echo Node.js nao encontrado em "%NODE_DIR%".
  echo Instale o Node.js LTS e tente novamente.
  exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"
call "%NPM_CMD%" run dev:local
