# syntax=docker.io/docker/dockerfile:1.5.2

FROM base-env AS test-e2e

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
ENV FLEX_USER=${FLEX_USER}
ENV PUPPETEER_DOWNLOAD_PATH=/usr/bin/google-chrome-stable
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

USER root
WORKDIR /root

# RUN ansible-playbook -t "test, ${FLEX_OS}, ${FLEX_CPU}" root.yml
RUN ansible-playbook -t "test, ${FLEX_OS}, ${FLEX_CPU}" -vvv root.yml

# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
# https://github.com/jessfraz/dockerfiles/issues/65#issuecomment-266532289
# RUN sysctl -w kernel.unprivileged_userns_clone=1
# RUN echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/00-local-userns.conf

# RUN service procps restart
# Previous command is ignored by docker (read only)
# See /bin/run-serve-all-test-e2e-federated-app.sh

# Make user ${FLEX_USER} sudo privileged for stage test_e2e
# RUN echo "${FLEX_USER} ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers && \
#     chmod 0440 /etc/sudoers && \
#     chmod g+w /etc/passwd 

USER ${FLEX_USER}:${FLEX_USER}
WORKDIR ${FLEX_APP}
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=install_deps ${FLEX_HOME}/.cache/Cypress/ ${FLEX_HOME}/.cache/Cypress/
COPY --chown=${FLEX_USER}:${FLEX_USER} --link --from=build-client-side ${FLEX_APP}/ ./

COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./__tests__/ ./__tests__/
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/flex/config/exec/test-e2e-jest-puppeteer-5.mjs ./packages/flex/config/exec/test-e2e-jest-puppeteer-5.mjs
# COPY --chown=${FLEX_USER}:${FLEX_USER} --link ./packages/flex/config/exec/test-e2e-cypress.mjs ./packages/flex/config/exec/test-e2e-cypress.mjs

ENTRYPOINT ["/bin/bash"]

CMD ["./bin/run-serve-all-test-e2e-federated-app.sh"]