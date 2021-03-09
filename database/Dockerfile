FROM alpine:3.13
ENV POSTGRES_PASSWORD 123456
ENV POSTGRES_DB ranking
COPY init.sql /docker-entrypoint-initdb.d/
