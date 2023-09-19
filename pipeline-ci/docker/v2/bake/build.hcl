group "default" {
  targets = [
    "base_env",
    "install_deps",
    "install_packages",
    "build_libs",
    "build_client_side",
    "build_ssr",
    "test_e2e",
    "final"
  ]
}

target "base_env" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    FLEX_DOCKER_PLATFORM = "${FLEX_DOCKER_PLATFORM}"
    FLEX_OS = "${FLEX_OS}"
    FLEX_CPU = "${FLEX_CPU}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_CI_DIR = "${FLEX_CI_DIR}"
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
    CI_PROJECT_URL= "${CI_PROJECT_URL}"
    CI_COMMIT_SHA = "${CI_COMMIT_SHA}"
    CI_COMMIT_SHORT_SHA= "${CI_COMMIT_SHORT_SHA}"
    DD_API_KEY = "${DD_API_KEY}"
    DD_SITE = "${DD_SITE}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:base_env"]
  context = "."
  dockerfile = "${FLEX_DOCKERFILES_DIR}/0_base_env.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:base_env"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "install_deps" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    FLEX_OS = "${FLEX_OS}"
    FLEX_CPU = "${FLEX_CPU}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:install_deps"]
  context = "."
  contexts = {
    base-env ="target:base_env"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/1_install_deps.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:install_deps"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "install_packages" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:install_packages"]
  context = "."
  contexts = {
    base-env ="target:base_env"
    install-deps = "target:install_deps"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/2_install_packages.dockerfile"
  // dockerfile-inline = <<EOT
  // FROM alpine
  // WORKDIR /src
  // COPY . .
  // RUN ls -l && stop
  // EOT
  tags = ["${FLEX_IMAGE_REPOSITORY}:install_packages"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "build_libs" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:build_libs"]
  contexts = {
    base-env ="target:base_env"
    install-deps = "target:install_deps"
    install-packages = "target:install_packages"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/3_build_libs.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:build_libs"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "build_client_side" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:build_client_side"]
  contexts = {
    base-env ="target:base_env"
    install-deps = "target:install_deps"
    install-packages = "target:install_packages"
    build-libs = "target:build_libs"
    // <!-- INSERT BLOCK -->
    /* BEGIN ANSIBLE MANAGED BLOCK */
    flex-design-system-react-ts = "target:flex_design_system_react_ts"
    flexiness-domain-content = "target:flexiness_domain_content"
    flexiness-domain-utils = "target:flexiness_domain_utils"
    /* END ANSIBLE MANAGED BLOCK */
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/4_build_client_side.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:build_client_side"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "build_ssr" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:build_ssr"]
  contexts = {
    base-env ="target:base_env"
    build-client-side = "target:build_client_side"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/5_build_ssr.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:build_ssr"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "test_e2e" {
  args = {
    CI = "${FLEX_CI}"
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:test_e2e"]
  context = "."
  contexts = {
    base-env ="target:base_env"
    install-deps = "target:install_deps"
    build-ssr = "target:build_ssr"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/6_test_e2e.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:test_e2e"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}

target "final" {
  args = {
    CI = false
    FLEX_USER = "${FLEX_USER}"
    FLEX_SERVICE= "${FLEX_SERVICE}"
    BUILDKIT_INLINE_CACHE = 1
    FLEX_HOME = "${FLEX_HOME}"
    FLEX_APP = "${FLEX_APP}"
    FLEX_PROTOCOL = "${FLEX_PROTOCOL}"
    FLEX_DOMAIN_NAME = "${FLEX_DOMAIN_NAME}"
    FLEX_BASE_DOMAIN= "${FLEX_BASE_DOMAIN}"
    FLEX_MODE = "${FLEX_MODE}"
    FLEX_IMAGE_REPOSITORY = "${FLEX_IMAGE_REPOSITORY}"
    FLEX_BRANCH = "${FLEX_BRANCH}"
  }
  cache-from = ["type=${FLEX_OUTPUT_LOC},ref=${FLEX_IMAGE_REPOSITORY}:final"]
  context = "."
  contexts = {
    base-env ="target:base_env"
    build-ssr = "target:build_ssr"
  }
  dockerfile = "${FLEX_DOCKERFILES_DIR}/7_final.dockerfile"
  tags = ["${FLEX_IMAGE_REPOSITORY}:final"]
  pull = true
  output = ["type=${FLEX_OUTPUT_LOC}"]
}
