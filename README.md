# browserless + lighthouse

> minimal lighthouse audit runner using browserless

## quickstart

```sh
$ git clone git@github.com:knksmith57/browserless-lighthouse browserless-lighthouse \
  && cd $_

$ docker-compose run --rm audit

$ docker-compose run --rm -e AUDIT_URL=https://google.com audit
```
