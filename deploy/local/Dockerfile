FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY ./dist/apps  /usr/share/nginx/html

COPY /deploy/local/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]
CMD ["nginx-debug", "-g", "daemon off;"]
