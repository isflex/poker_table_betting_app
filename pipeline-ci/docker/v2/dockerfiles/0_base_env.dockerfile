# syntax=docker.io/docker/dockerfile:1.5.2

ARG FLEX_DOCKER_PLATFORM
# FROM --platform=linux/amd64 ubuntu:jammy-20220815 AS base-env
FROM --platform=${FLEX_DOCKER_PLATFORM} ubuntu:jammy-20220815 AS base-env

ARG FLEX_SERVICE
ARG FLEX_HOME
ARG FLEX_USER
ARG FLEX_CI_DIR
ARG FLEX_PROTOCOL
ARG FLEX_DOMAIN_NAME
ARG FLEX_BASE_DOMAIN
ARG FLEX_MODE
ARG FLEX_BRANCH
ARG FLEX_IMAGE_REPOSITORY
ARG FLEX_OS
ARG FLEX_CPU
ARG CI=${FLEX_CI}
ARG CI_PROJECT_URL
ARG CI_COMMIT_SHA
ARG CI_COMMIT_SHORT_SHA
ARG GIT_COMMIT_SHA=${CI_COMMIT_SHA}
ARG GIT_COMMIT_SHORT_SHA=${CI_COMMIT_SHORT_SHA}
ARG DD_API_KEY
ARG DD_SITE
ARG DD_ENV=${FLEX_MODE}
ARG DD_GIT_REPOSITORY_URL=${CI_PROJECT_URL}
ARG DD_GIT_COMMIT_SHA=${CI_COMMIT_SHA}
ARG DD_GIT_BRANCH=${FLEX_BRANCH}
# ARG CERTS=/certs/${FLEX_DOMAIN_NAME}/letsencrypt

ENV DEBIAN_FRONTEND=noninteractive
ENV CI=${CI}
ENV FLEX_USER=${FLEX_USER}
ENV DD_API_KEY=${DD_API_KEY}
ENV DD_SITE=${DD_SITE}
ENV DD_HOSTNAME=${FLEX_DOMAIN_NAME}
ENV DD_SERVICE=${FLEX_SERVICE} 
ENV DD_GIT_REPOSITORY_URL=${DD_GIT_REPOSITORY_URL}
ENV DD_GIT_COMMIT_SHA=${DD_GIT_COMMIT_SHA}
ENV DD_GIT_BRANCH=${DD_GIT_BRANCH}

ENV DD_LOGS_ENABLED=false
ENV DD_PROCESS_AGENT_ENABLED=false
ENV DD_APM_ENABLED=false
ENV DD_RUNTIME_METRICS_ENABLED=false
ENV DD_PROFILING_ENABLED=false
ENV DD_APPSEC_ENABLED=false

ENV DD_LOG_LEVEL=debug
ENV DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL=true
ENV DD_LOGS_INJECTION=true
ENV DD_APM_INSTRUMENTATION_ENABLED=docker
ENV DD_APM_INSTRUMENTATION_LANGUAGES=all
ENV DD_AGENT_MAJOR_VERSION=7
ENV DD_TRACE_SAMPLE_RATE="1"
ENV DD_TRACE_AGENT_URL="http://localhost:8126"
ENV DD_ENV=${DD_ENV}

WORKDIR /usr/local/bin
# Set the SHELL to bash with pipefail option
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN apt-get update && \
apt-get upgrade -y && \
apt-get install -y apt-utils build-essential curl git software-properties-common sudo && \
apt-add-repository -y ppa:ansible/ansible && \
apt-add-repository -y ppa:neovim-ppa/unstable && \
apt-get update && \
apt-get install -y ansible neovim && \
apt-get clean autoclean && \
apt-get autoremove -y

USER root
WORKDIR /root
COPY ${FLEX_CI_DIR}/ansible/tasks/root/ ./tasks/root/
# COPY ${FLEX_CI_DIR}/ansible/tasks/dd-agent/ ./tasks/dd-agent/
COPY ${FLEX_CI_DIR}/ansible/host_vars/ ./host_vars/
COPY ${FLEX_CI_DIR}/ansible/root.yml ./root.yml

RUN addgroup --gid 1000 ${FLEX_USER}
RUN adduser --gecos ${FLEX_USER} --uid 1000 --gid 1000 --disabled-password ${FLEX_USER}
# RUN usermod -aG sudo ${FLEX_USER}

RUN addgroup --gid 108 dd-agent
RUN adduser --gecos dd-agent --uid 108 --gid 108 --disabled-password dd-agent
# RUN usermod -aG sudo dd-agent

# RUN ansible-galaxy install datadog.datadog --roles-path=/root/.ansible/roles

# RUN ansible-playbook -t "core, ${FLEX_OS}, ${FLEX_CPU}" root.yml
RUN ansible-playbook -t "core, ${FLEX_OS}, ${FLEX_CPU}" -vvv root.yml
# RUN ansible-playbook -t "core, dd-agent, ${FLEX_OS}, ${FLEX_CPU}" root.yml

USER ${FLEX_USER}:${FLEX_USER}
WORKDIR ${FLEX_HOME}
COPY --chown=${FLEX_USER}:${FLEX_USER} ${FLEX_CI_DIR}/ansible/tasks/local/ ./tasks/local/
COPY --chown=${FLEX_USER}:${FLEX_USER} ${FLEX_CI_DIR}/ansible/local.yml ./local.yml
RUN ansible-playbook -t install local.yml
# RUN ansible-playbook -t install -vvv local.yml

RUN source $HOME/.nvm/nvm.sh && \
nvm use 18.15.0

ENTRYPOINT ["/bin/bash"]
