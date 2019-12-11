echo "Make sure you run ng build before running this script"
ssh -t winscacc@csse.usc.edu 'rm -r /Users/winscacc/winbook-server/winbook-app'
scp -r ./dist/winbook-app winscacc@csse.usc.edu:/Users/winscacc/winbook-server
