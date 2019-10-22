# Author: mk303 #

###### Step Zero - Remove existing files ######
sudo systemctl stop nginx
sudo apt-get remove nginx -y
sudo apt-get autoremove -y

###### Step One — Install nginx ######
sudo apt-get update
sudo apt-get install systemd systemd-sysv -y
sudo apt-get install nginx --force-yes -y

# start nginx
sudo systemctl start nginx

###### Step Two — Create the SSL Certificate ######
sudo mkdir /etc/nginx/ssl

#Change company details
country=DE
state=Baden-Wuerttemberg
locality=Stuttgart
organization=Astro
organizationalunit=eCommerce
commonname=Astro-Space-Estate
email=admin@webspec65.mi.hdm-stuttgart.de
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx.key -out /etc/nginx/ssl/nginx.crt -subj "/C=$country/ST=$state/L=$locality/O=$organization/OU=$organizationalunit/CN=$commonname/emailAddress=$email"

###### Step Three — Configure Nginx to Use SSL ######
sed -i 's/# listen 443 ssl default_server;/listen 443 ssl;/g' /etc/nginx/sites-available/default
sed -i '/server_name _;/a \\tssl_certificate_key /etc/nginx/ssl/nginx.key;' /etc/nginx/sites-available/default
sed -i '/server_name _;/a \\tssl_certificate /etc/nginx/ssl/nginx.crt;' /etc/nginx/sites-available/default
sed -i 's/server_name _;/server_name webspec65.mi.hdm-stuttgart.de;/g' /etc/nginx/sites-available/default

# redirect to baseurl/index.html to handle page reloads
sed -i 's/try_files $uri $uri\/ =404;/try_files $uri $uri\/ \/astro\/index.html =404;/g' /etc/nginx/sites-available/default

# restart nginx
sudo systemctl restart nginx

###### Print Status and Errors
printf '\n\n General: \n\n'; nginx -t ; printf '\n\n Errors: \n\n' && tail /var/log/nginx/error.log