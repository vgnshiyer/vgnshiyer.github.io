---
title: Practice Ansible without spending on AWS
subtitle: A lightweight container based network using docker
date: Apr 5, 2024
cover: /blogs/container_net/images/cover.png
tags:
  - software_engineering
  - devops
  - networking
---

Introducing Container Net! A fully functional minimalistic network of servers on your local machine using Docker. 

#### Background

Couple weeks ago, I had a DevOps interview and I found myself in a pursuit for a more efficient sandbox environment. I wanted a way to run linux administration, networking commands, active directories, run tools like ansible. I toiled hard to rummage some resource on the internet, and every single blog and online forums pointed me towards two things. The cloud and virtual machines. While Vagrant offers a free-to-use solution using virtual machines, its provisioning can be slothful and taxing on the system. Cloud on the other hand although quick to provision, comes with complexities and cost.

Docker containers emerge as a conspicuously sleeker alternative, yet crafting a Dockerfile to mirror an authentic Ubuntu server necessitates precision.

Below is a quick tutorial for you to get started with practicing ansible without much effort. Feel free to modify it to fit your usecase.

#### Quickstart

Get a set of servers(containers) running with your docker engine with these minimum steps.

1. Run below commands.

```bash
git clone https://github.com/vgnshiyer/Container-Net
cd Container-Net && docker-compose up
```

2. Open [localhost:7681](http://localhost:7681) in your browser

#### Bonus

The following is a short example running an ansible playbook to run an HTTP server on one of the servers in the network.

* Spin up a network using the steps [here](#quickstart).
* Login to ubuntu1 with the guest (guest1:guest1) user credentials set in the `.env` file. (Alternatively, you can login as a root user using username: root, password: root)
* Create an empty ansible playbook file.

```bash
mkdir ansible-example && touch ansible-example/playbook.yml
```

* Copy below code to the playbook file.

```yaml
- hosts: app
  become: yes

  tasks:
    - name: Update
      command: apt-get update -y
    - name: Install Apache
      package:
        name: apache2
        state: present
    - name: replace index.html
      copy:
        src: index.html
        dest: /var/www/html/index.html
    - name: Start apache service
      service:
        name: apache2
        state: started
        enabled: yes
```

* Create an index.html file inside `/ansible-example` with below contents.

```html
<html>
    <head>
        <title>Welcome!</title>
    </head>
    <body>
        <h1>Success!</h1>
    </body>
</html>
```

* Create an inventory file for ansible.

```bash
sudo mkdir -p /etc/ansible
sudo touch /etc/ansible/hosts
```

* Copy below contents into the inventory file.

```ini
# /etc/ansible/hosts

[app]
ubuntu2

[all:vars]
ansible_connection=ssh
ansible_user=guest1
ansible_ssh_pass=guest1
ansible_sudo_pass=guest1
```
* Run the ansbile playbook. 

```bash
ansible-playbook playbook.yml
```

* Once, the playbook has run successfully, verify that our HTTP server is up and running on the Fedora1 container.

```bash
curl ubuntu2
```

View the project source code at [vgnshiyer/Container-Net](https://github.com/vgnshiyer/Container-Net/). Refer the `/examples` directory for more ansible examples.

#### Advanced

Visit [https://github.com/vgnshiyer/Container-Net](https://github.com/vgnshiyer/Container-Net) for additional information.

#### Have suggestions?

Submit an [issue](https://github.com/vgnshiyer/Container-Net/issues) with an apt description.

#### Final thoughts

The above resource has been invaluable free-to-run alternative for practicing ansible, linux administration, networking for me. I believe that this can be made better, for which I ask for your active contribution. Peace!
