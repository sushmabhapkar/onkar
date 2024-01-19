FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs
RUN apt-get install -y git




RUN git clone  https://github.com/OnkarDivekar07/ExpenseTrackerWithMongoDB.git

WORKDIR /ExpenseTrackerWithMongoDB

RUN npm install -g npm@latest
RUN npm i

ENTRYPOINT [ "node", "app.js" ]