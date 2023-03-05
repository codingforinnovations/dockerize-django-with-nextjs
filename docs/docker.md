Clean up unused and dangling images
$ docker image prune
Clean up dangling images only
$ docker image prune -a
Clean up stopped containers
$ docker container prune
Clean up unused volumes
$ docker volume prune

If you want to clean up most Docker resources but still keep tagged images, you can execute this command:








$ docker system prune

docker builder prune
it remove build cache