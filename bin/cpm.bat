@echo off

setlocal ENABLEEXTENSIONS
setlocal enabledelayedexpansion
SET INSTANCES=""

:GETCCONTROL
REG QUERY HKLM\SOFTWARE\Wow6432Node /ve > nul 2>&1
if %errorlevel% equ 0 ( SET KEY_NAME=HKLM\SOFTWARE\Wow6432Node\Intersystems\Cache\Configurations\
) else ( SET KEY_NAME=HKLM\SOFTWARE\Intersystems\Cache\Configurations\ )

:: searching ccontrol in current directory
if exist "%cd%\ccontrol.exe" (
  SET CACHEBIN=%cd%\
  goto :GETRUNNING
)

:: searching ccontrol in GLOBALS_HOME variable
if DEFINED GLOBALS_HOME (
  if exist "%GLOBALS_HOME%\bin\ccontrol.exe" (
    SET CACHEBIN=%GLOBALS_HOME%\bin\
    goto GETRUNNING 
  )
)

:: and searching ccontrol by windows registry 
FOR /F "usebackq" %%I IN (`REG QUERY %KEY_NAME% 2^>nul`) DO (
  FOR /F "usebackq skip=2 tokens=*" %%A IN (`REG QUERY %%I\Directory /ve 2^>nul`) DO (
    SET directory=%%A
    SET directory=!directory:*REG_SZ=!
    FOR /F "tokens=* delims= " %%a IN ("!directory!") DO SET directory=%%a
    IF exist "!directory!\bin\ccontrol.exe" ( 
      SET CACHEBIN=!directory!\bin\
      break
    )
  )
)

if not DEFINED CACHEBIN (
  echo Something went wrong, where is your Cache installation? 1>&2
  exit /b 1
)

:GETRUNNING

:: get temp filename, for ccontrol output
:GETTEMPNAME
set TMPFILE=%TMP%\cpm-%RANDOM%.tmp
if exist "%TMPFILE%" GOTO :GETTEMPNAME 

"%CACHEBIN%ccontrol.exe" qlist nodisplay | findstr running, > "%TMPFILE%"
set n=0
for /f "tokens=1-8 delims=^" %%A in ('type "%TMPFILE%"') DO (
    set INSTANCE=%%A
    set DIRECTORY=%%B
    set VERSION=%%C
    
    set /A n+=1
    set INSTANCES[!n!]=!INSTANCE!
    set DIRECTORIES[!n!]=!DIRECTORY!

    :: only first instance yet
    break
)

if !n! equ 0 (
  echo There are no running instances! 1>&2
  exit /b 1
)

del "%TMPFILE%"

set INSTANCE=!INSTANCES[1]!
set CACHEBIN=!DIRECTORIES[1]!\bin\

:: run command in cache
cd "%CACHEBIN%"
cache.exe -s..\mgr\ "BATCH^CPM(""%*"")"
cd "%cd%"

:eof
exit /b 0
