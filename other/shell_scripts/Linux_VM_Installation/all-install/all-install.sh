#! /bin/sh
#script for webshop environment installation on VM by Oliver Maicher, 11.04.2019

# run install all install scripts

su -

# install super user
apt-get install sudo -y

sudo apt update && sudo apt upgrade -y

bash /root/astro/mongodb-install.sh
bash /root/astro/java-install.sh
bash /root/astro/maven-install.sh
bash /root/astro/angular-install.sh
