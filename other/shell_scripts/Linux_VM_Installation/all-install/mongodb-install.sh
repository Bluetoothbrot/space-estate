#! /bin/sh
#script for MongoDB installation on VM by Oliver Maicher, 11.04.2019

# activate super user
su -

# create directory /data/db for MongoDB
sudo mkdir -p /data/db

# install mongodb-server
#sudo apt-get install mongodb-server

# install mongodb via npm
#npm i -g mongodb

# install mongo server via npm
#npm i -g mongod

# install mongo command line clients
#npm i -g mongo-client

# kill mongod instances
killall -15 mongod

# version
mongod -version

# run mongod server, socket: 0.0.0.0:28017
#mongod
# WARNING: You are running on a NUMA machine. We suggest launching mongod like this to avoid performance problems: numactl --interleave=all mongod [other options]

# deinstall mongo because version 2.4 is deprecated and doesn't support wire version 1
sudo apt-get purge mongodb mongodb-clients mongodb-server mongodb-dev -y
sudo apt-get purge mongodb-10gen -y
sudo apt-get autoremove -y

# import GPK key for the MongoDB apt repository, required to test packages before installation
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# gdebi does look for all the dependencies of the .deb file, and will install them before attempting to install the .deb file
sudo apt install gdebi-core

# cd to user
cd ~

# download mongodb-org-server_4.0.9_amd64.deb
wget https://repo.mongodb.org/apt/debian/dists/jessie/mongodb-org/3.2/main/binary-amd64/mongodb-org-server_3.2.22_amd64.deb

# download mongodb-org-shell_4.0.9_amd64.deb
wget http://repo.mongodb.org/apt/debian/dists/jessie/mongodb-org/4.0/main/binary-amd64/mongodb-org-shell_4.0.9_amd64.deb

# install mongod
sudo gdebi mongodb-org-server_3.2.22_amd64.deb

# delete file
rm ~/mongodb-org-server_3.2.22_amd64.deb

# install mongo
sudo gdebi mongodb-org-shell_4.0.9_amd64.deb

# delete file
rm ~/mongodb-org-shell_4.0.9_amd64.deb

# show installed mongos
dpkg --list | grep mongo

# uninstall
# sudo apt-get --purge remove mongodb-org-server

# kill mongod instances
killall mongod

# install curl
sudo apt-get install curl

# run mongod
mongod
