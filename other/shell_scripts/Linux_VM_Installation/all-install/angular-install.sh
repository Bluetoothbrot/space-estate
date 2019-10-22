#! /bin/sh
#script for angular installation on VM by Oliver Maicher, 11.04.2019

# activate super user
su -

# remove wrong node installation v0.10....
sudo apt remove nodejs -y
rm -rf /root/.nvm/versions/node/v11.14.0/bin/ng
rm -rf ../lib/node_modules/angular-cli/bin/ng

#install git
sudo apt-get install git -y

# install nvm for installing npm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# install npm
nvm install stable

# install angular command line interface globally showing steps
npm install -g @angular/cli
