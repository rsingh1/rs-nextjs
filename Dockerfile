FROM node:20-alpine AS base
RUN mkdir -p /app
COPY ..
USER node
COPY --chown=node docker-entrypoint.sh /usr/local/bin/
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["npm","run", "start"]