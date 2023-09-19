# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS install-packages

ARG FLEX_HOME
ARG FLEX_USER
ARG FLEX_APP
ARG FLEX_PROTOCOL
ARG FLEX_DOMAIN_NAME
ARG FLEX_BASE_DOMAIN
ARG FLEX_MODE
ARG FLEX_IMAGE_REPOSITORY
ARG CI=${FLEX_CI}
ARG BUILDKIT_INLINE_CACHE=1

ENV FLEX_APP=${FLEX_APP}
ENV CI=${CI}
ENV FLEX_USER=${FLEX_USER}

USER ${FLEX_USER}:${FLEX_USER}

WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./apps/ ./apps/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/ ./packages/