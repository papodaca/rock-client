FROM lambci/lambda:build

ENV AWS_DEFAULT_REGION us-east-1

ADD . .

RUN npm install
RUN npm run build

ENV NODE_ENV=production
RUN rm -r node_modules
RUN npm install
RUN sls deploy
