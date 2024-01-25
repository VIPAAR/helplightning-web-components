ARG HL_BASE=20190926-1
FROM helplightning-base:nodejs-build-${HL_BASE}

RUN apk --no-cache add bash git openssh

# change the default shell
#  to bash, me no likely ash
RUN sed -i s\|/bin/ash\|/bin/bash\|g /etc/passwd

### Make an SSH directory
RUN mkdir /root/.ssh/ && chown 0700 /root/.ssh

### WEBJS builder
COPY build-release /root/build-release

## Supervisor is our main process
WORKDIR /root
CMD ["/bin/bash"]
