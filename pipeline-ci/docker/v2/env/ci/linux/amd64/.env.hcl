FLEX_SERVICE="pokerapp"
FLEX_CI_DIR="pipeline-ci"
FLEX_DOCKER_DIR="${FLEX_CI_DIR}/docker/v2"
FLEX_BAKE_DIR="${FLEX_DOCKER_DIR}/bake"
FLEX_DOCKERFILES_DIR="${FLEX_DOCKER_DIR}/dockerfiles"
FLEX_COMPOSE_DIR="${FLEX_DOCKER_DIR}/compose"
FLEX_INCLUDES_DIR="${FLEX_DOCKER_DIR}/includes/gitlab"
FLEX_IMAGE_REPOSITORY="registry.gitlab.com/nooski/poker_table_betting_app/linux_amd64/dev-react"
FLEX_BRANCH="dev-react"
FLEX_OUTPUT_LOC="registry"
FLEX_USER="isflex"
FLEX_HOME="/home/${FLEX_USER}"
FLEX_APP="${FLEX_HOME}/projects/${FLEX_SERVICE}"
FLEX_DOCKER_BUILDKIT_DEPTH=7
FLEX_DOCKER_PLATFORM="linux/amd64"
FLEX_CI_ARCH_TAG="linux_amd64"
FLEX_OS="linux"
FLEX_CPU="x64"
FLEX_CI="true"
FLEX_PROTOCOL="https://"
FLEX_DOMAIN_NAME="poker.flexiness.com"
FLEX_BASE_DOMAIN="flexiness.com"
FLEX_MODE="production"
CI_PROJECT_URL=""
CI_COMMIT_SHA=""
CI_COMMIT_SHORT_SHA=""
DD_API_KEY=""
DD_SITE=""