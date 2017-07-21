FROM circleci/node:7.10
RUN echo "deb http://http.debian.net/debian jessie-backports main" | sudo tee --append /etc/apt/sources.list
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee --append /etc/apt/sources.list
RUN sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
RUN sudo apt-get update
RUN sudo apt-get install -t jessie-backports openjdk-8-jdk
RUN sudo apt-get install google-chrome-stable