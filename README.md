# Microservices Caddy Stack

Requires docker installed on your machine.

To start run `docker compose up --build`.

This should generate certificates in `./gateway/data/pki/authorities/local`. Both the `intermediate.crt` and `root.crt` need to be installed on your machine. Now stop and restart the containers. You should now have local SSL.
