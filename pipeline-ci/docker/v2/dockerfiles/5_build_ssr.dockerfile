# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS build-ssr

ARG FLEX_HOME
ARG FLEX_USER
ARG FLEX_APP
ARG FLEX_PROTOCOL
ARG FLEX_DOMAIN_NAME
ARG FLEX_BASE_DOMAIN
ARG FLEX_MODE
ARG FLEX_IMAGE_REPOSITORY
ARG FLEX_OS
ARG FLEX_CPU
ARG CI=${FLEX_CI}
ARG GIT_COMMIT_SHA=${GIT_COMMIT_SHA}
ARG BUILDKIT_INLINE_CACHE=1
ARG NODE_TLS_REJECT_UNAUTHORIZED=0

ENV FLEX_APP=${FLEX_APP}
ENV CI=${CI}
ENV GIT_COMMIT_SHA=${GIT_COMMIT_SHA}

RUN cat /etc/hosts

USER ${FLEX_USER}:${FLEX_USER}
WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-client-side ${FLEX_APP}/ ./

COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/gateway/ ./packages/gateway/

RUN install -d -m 0755 -o ${FLEX_USER} -g ${FLEX_USER} ${FLEX_APP}/packages/gateway/nextjs-telenko/build

RUN --mount=type=cache,target=${FLEX_APP}/node_modules/.cache/nx,id=nx_cache,gid=1000,uid=1000 \
--mount=type=cache,target=${FLEX_APP}/packages/gateway/nextjs-telenko/build/cache,id=next_cache,gid=1000,uid=1000 \
source ~/.profile && \
yarn build:flex-gateway
# yarn build-nx:flex-gateway
# yarn build:flex-gateway:exec

# RUN --mount=type=cache,target=${FLEX_APP}/node_modules/.cache/nx,id=nx_cache,gid=1000,uid=1000 \
# source ~/.profile && \
# yarn build:flex-gateway