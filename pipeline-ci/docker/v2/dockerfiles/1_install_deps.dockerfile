# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS install-deps

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
ARG BUILDKIT_INLINE_CACHE=1

ENV FLEX_APP=${FLEX_APP}
ENV CI=${CI}
ENV FLEX_USER=${FLEX_USER}
ENV FLEX_YARN_ARCHITECTURE_OS=${FLEX_OS}
ENV FLEX_YARN_ARCHITECTURE_CPU=${FLEX_CPU}
ENV FLEX_YARN_LOGFILTER_LEVEL=discard
ENV FLEX_DOCKER_BUILDKIT_DEPTH=7
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

USER ${FLEX_USER}:${FLEX_USER}

WORKDIR ${FLEX_HOME}
RUN mkdir -p ./data/db

WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./yarn.lock ./yarn.lock
COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./.yarn/ ./.yarn/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link nx.json ./
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link lerna.json nx.json workspace.json ./
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./.nxignore ./.nxignore

COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/flex/types/ ./packages/flex/types/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/flex/config/ ./packages/flex/config/

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "package.json" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name ".yarnrc.yml" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name ".env.*" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "tsconfig*.json" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "project*.json" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "webpack*.js" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "*babel*" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "server.*s" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

RUN --mount=type=bind,target=/docker-context \
cd /docker-context/; \
find . -name "docker-compose*.yml" -mindepth 0 -maxdepth ${FLEX_DOCKER_BUILDKIT_DEPTH} -exec cp --parents "{}" ${FLEX_APP} \;

COPY --chown=${FLEX_USER}:${FLEX_USER} --chmod=700 --link ./bin/ ./bin/

# RUN tree --dirsfirst -L ${FLEX_DOCKER_BUILDKIT_DEPTH} -a ./

RUN --mount=type=cache,target=${FLEX_APP}/.yarn/cache,id=yarn_cache_install,gid=1000,uid=1000 \
source ~/.profile && \
yarn install --inline-builds --immutable