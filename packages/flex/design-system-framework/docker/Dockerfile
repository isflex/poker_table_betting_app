FROM nginx:stable

# support running as arbitrary user which belogs to the root group
RUN chmod 777 /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)\[\:\:\]\:80;/listen [::]:8081;/' /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf

# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

EXPOSE 8081

RUN mkdir -p /usr/share/nginx/html

COPY public /usr/share/nginx/html/
