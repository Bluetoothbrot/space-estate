#! /bin/sh
#script for JaaS installation on VM by Oliver Maicher, 11.04.2019
# found on: https://wrapper.tanukisoftware.com/doc/english/qna-unix-daemon.html

# activate super user
su -

# creating a system group for the user
sudo groupadd -r appmgr

# create a system user jvmapps with the default group
sudo useradd -r -s /bin/false -g appmgr jvmapps

# Confirm user created and if with the correct group
# id jvmapps
# uid=992(jvmapps) gid=986(appmgr) groups=986(appmgr)

# create a systemd service file as root user to manage our application
sudo touch /etc/systemd/system/myapp.service

#settings into file, TODO: max and minimum memory -Xms: ExecStart=/bin/java -Xms128m -Xmx256m -jar myapp.jar
echo "[Unit]
Description=Manage Java service

[Service]
WorkingDirectory=/root/astro
ExecStart=/bin/java -jar backend-0.0.1-SNAPSHOT.jar
User=jvmapps
Type=simple
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target" >> /etc/systemd/system/myapp.service

# give the user and group ownership permissions for Project Directory
sudo chown -R jvmapps:appmgr /root/astro

# reload systemd to know of the new application
sudo systemctl daemon-reload

# start the service
sudo systemctl start myapp.service

# check status
sudo systemctl status myapp

# enable the service to start on server boot
sudo systemctl enable myapp

# restart
sudo systemctl restart myapp
