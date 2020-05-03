#!/bin/bash
echo "entrei no script"
echo "$SERVER_IP"
echo $SERVER_IP

# Desabilita validação de Host
echo -- Desabilita validacao de Host --
mkdir -p ~/.ssh
touch ~/.ssh/config
echo -e "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

# Cria o arquivo da chave SSH
touch sshCredentials.pem
echo -e "$SERVER_SSH" > sshCredentials.pem
chmod 600 sshCredentials.pem

sudo scp -i sshCredentials.pem -r teste $SERVER_USER@$SERVER_IP:/home/samu_gcloud/samu-radio-tracker/frontend/build/

# gcloud secrets versions access
# echo gcloud secrets versions access