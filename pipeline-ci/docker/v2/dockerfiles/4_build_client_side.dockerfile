# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS build-client-side

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

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-deps ${FLEX_APP}/ ./

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/apps/poker/api/dist/ ./apps/poker/api/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/apps/poker/client/dist/ ./apps/poker/client/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/apps/poker/client/build/ ./apps/poker/client/build/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/apps/poker/common/dist/ ./apps/poker/common/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/apps/poker/server/dist/ ./apps/poker/server/dist/

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/packages/flex/design-system-framework/src/modules3/default/ ./packages/flex/design-system-framework/src/modules3/default/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/packages/flex/design-system-framework/src/modules3/primatifs/ ./packages/flex/design-system-framework/src/modules3/primatifs/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install-packages ${FLEX_APP}/packages/flex/design-system-framework/src/webfonts/ ./packages/flex/design-system-framework/src/webfonts/

###### Custom ######
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/domain-lib-mobx-react-router/dist/ ./packages/flex/domain-lib-mobx-react-router/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/domain-lib-mobx-react-router/lib/ ./packages/flex/domain-lib-mobx-react-router/lib/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/config/aws/dist/ ./packages/flex/config/aws/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/config/certs/dist/ ./packages/flex/config/certs/dist/
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/config/eslint/dist/ ./packages/flex/config/eslint/dist/
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/config/languages/dist/ ./packages/flex/config/languages/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-libs ${FLEX_APP}/packages/flex/domain-tailwind/dist/ ./packages/flex/domain-tailwind/dist/

## flex-design-system ##
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flex-design-system-react-ts ${FLEX_APP}/packages/flex/design-system-react-ts/dist/ ./packages/flex/design-system-react-ts/dist/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flex-design-system-react-ts ${FLEX_APP}/packages/flex/design-system-react-ts/build/ ./packages/flex/design-system-react-ts/build/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flex-design-system-react-ts ${FLEX_APP}/packages/flex/design-system-react-ts/src/ ./packages/flex/design-system-react-ts/src/

## flex-backend ##
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flex-backend-domain-database ${FLEX_APP}/packages/flex/domain-database/nestjs-with-graphql/dist/ ./packages/flex/domain-database/nestjs-with-graphql/dist/
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flex-backend-json-server-backend ${FLEX_APP}/packages/flex/domain-database/json-server-backend/ ./packages/flex/domain-database/json-server-backend/

## flexiness ##
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flexiness-domain-utils ${FLEX_APP}/packages/flex/domain-utils/dist/ ./packages/flex/domain-utils/dist/
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flexiness-domain-app ${FLEX_APP}/packages/flex/domain-app/build/ ./packages/flex/domain-app/build/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=flexiness-domain-content ${FLEX_APP}/packages/flex/domain-content/content/ ./packages/flex/domain-content/content/