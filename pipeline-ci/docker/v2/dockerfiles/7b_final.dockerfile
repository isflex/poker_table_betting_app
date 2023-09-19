# syntax=docker.io/docker/dockerfile:1.5.2

ARG FLEX_IMAGE_REPOSITORY
FROM ${FLEX_IMAGE_REPOSITORY}:base_env AS final

ARG FLEX_HOME
ARG FLEX_USER
ARG FLEX_APP
ARG FLEX_PROTOCOL
ARG FLEX_DOMAIN_NAME
ARG FLEX_BASE_DOMAIN
ARG FLEX_MODE
ARG FLEX_IMAGE_REPOSITORY
ARG CI=false
ARG GIT_COMMIT_SHA=${GIT_COMMIT_SHA}
ARG BUILDKIT_INLINE_CACHE=1

ENV FLEX_APP=${FLEX_APP}
ENV GIT_COMMIT_SHA=${GIT_COMMIT_SHA}

USER ${FLEX_USER}:${FLEX_USER}
WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=registry.gitlab.com/nooski/poker_table_betting_app/linux_amd64/main:build-client-side ${FLEX_APP}/ ./
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/flex/config/exec/launch-all.mjs ./packages/flex/config/exec/launch-all.mjs

RUN --mount=type=cache,target=${FLEX_APP}/.yarn/cache,id=yarn_cache_focus,gid=1000,uid=1000 \
source ~/.profile && \
yarn workspaces focus --all --production

ENTRYPOINT ["/bin/bash"]

CMD ["./bin/run-serve-all.sh"]