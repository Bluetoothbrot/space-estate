#! /bin/sh
#script for MongoDB installation on VM by Oliver Maicher, 11.04.2019

su -
apt-get install sudo -y

sudo apt-get purge mongodb-org*

apt-get install apt-transport-https -y

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

sudo touch /etc/systemd/system/mongodb.service

cat >> /etc/systemd/system/mongodb.service << EOF

#Unit contains the dependencies to be satisfied before the service is started.
[Unit]
Description=MongoDB Database
After=network.target
Documentation=https://docs.mongodb.org/manual
# Service tells systemd, how the service should be started.
# Key `User` specifies that the server will run under the mongodb user and
# `ExecStart` defines the startup command for MongoDB server.
[Service]
User=mongodb
Group=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf
# Install tells systemd when the service should be automatically started.
# `multi-user.target` means the server will be automatically started during boot.
[Install]
WantedBy=multi-user.target
EOF

sudo apt-get install libcurl3 openssl -y

sudo apt-get update

sudo mkdir -p /data/db

sudo apt-get install mongodb -y

sudo mongod

sudo service mongod stop



libasan0 libatomic1 libboost-dev libboost-filesystem1.55.0 libboost-program-options1.55.0 libboost-system1.55.0
  libboost-thread1.55.0 libboost1.55-dev libc-dev-bin libc6-dev libgcc-4.8-dev libgomp1 libgoogle-perftools4
  libitm1 libpcap0.8 libpcrecpp0 libquadmath0 libsnappy1 libstdc++-4.8-dev libtcmalloc-minimal4 libtsan0 libunwind8
  libv8-3.14.5 linux-libc-dev manpages manpages-dev mongodb-clients mongodb-dev
