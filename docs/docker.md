## Docker Commands:

- Run a Image
```docker
$ docker run {image Name}
```

- Stop a Image
```docker
$ docker stop {image Name}
```

- List Docker Images
```docker
$ docker ps
```

- Restart Docker Image
```docker
$ docker restart {image Name}
```

- Kill Docker Image
```docker
$ docker kill {image Name}
```

- Clean up unused and dangling images
```docker
$ docker image prune
```

- Clean up dangling images only
```docker
$ docker image prune -a
```
- Clean up stopped containers
```docker
$ docker container prune
```
- Clean up unused volumes
```docker
$ docker volume prune
```
  
- If you want to clean up most Docker resources but still keep tagged images, you can execute this command:
```docker
$ docker system prune
```
- Remove build cache
```docker
 $ docker builder prune
```

