# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS flex-design-system-react-ts

ARG FLEX_HOME
ARG FLEX_USER
ARG FLEX_APP
ARG FLEX_PROTOCOL
ARG FLEX_DOMAIN_NAME
ARG FLEX_BASE_DOMAIN
ARG FLEX_MODE
ARG FLEX_IMAGE_REPOSITORY
ARG FLEX_PROJ_DIR_GENERATED=packages/flex/design-system-react-ts
ARG CI=${FLEX_CI}
ARG BUILDKIT_INLINE_CACHE=1
ARG NX_SKIP_NX_CACHE=true

ENV FLEX_APP=${FLEX_APP}
ENV CI=${CI}
ENV FLEX_USER=${FLEX_USER}

USER ${FLEX_USER}:${FLEX_USER}
WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-deps ${FLEX_APP}/ ./
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/ ./

RUN --mount=type=cache,target=${FLEX_APP}/node_modules/.cache/nx,id=nx_cache,gid=1000,uid=1000 \
--mount=type=cache,target=${FLEX_APP}/${FLEX_PROJ_DIR_GENERATED}/.yarn/.cache/webpack,id=flex_design_system_react_ts_cache,gid=1000,uid=1000 \
source ~/.profile && \
yarn nx run @flex-design-system/react-ts:build
