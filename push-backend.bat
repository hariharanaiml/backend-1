@echo off
echo Pushing Backend Changes to GitHub...
git add .
git commit -m "Update CORS for production deployment"
git push origin main
pause