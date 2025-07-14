FROM node:18
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 5000
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
CMD ["/wait-for-it.sh", "mysql:3306", "--", "npm", "run", "dev"]