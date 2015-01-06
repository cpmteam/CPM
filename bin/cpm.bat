@echo off

setlocal ENABLEEXTENSIONS
setlocal enabledelayedexpansion
set KEY_NAME="HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Intersystems\Cache\Configurations"
set INSTANCES

FOR /F "usebackq" %%I IN (`REG QUERY %KEY_NAME% 2^>nul`) DO (
	SET PRODUCT=`REG QUERY /ve %%I`
	FOR /F "usebackq skip=2 tokens=3" %%P IN (`REG QUERY %%I\Product /ve 2^>nul`) DO (
		SET "NOCACHE="
		if %%P equ EMS SET NOCACHE=1
		if %%P equ Globals SET NOCACHE=1
		if not defined NOCACHE (
			echo %%I %%P
			SET INSTANCES[%%P]=%%I
		)
	)
)

echo %INSTANCES%