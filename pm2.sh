PM2_EXIST=$(if pm2 list 2> /dev/null | grep -q "$1"; then echo "Yes" ; else echo "No" ; fi)

if [ $PM2_EXIST = Yes ] ; then
    pm2 restart $1
    echo "Restarted \"$1\"."
else
    pm2 start npm --name $1 -- start
    echo "Started \"$1\"."
    pm2 save
    # pm2 startup
fi
