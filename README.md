# Extentsoft DevOps Sample

![alt text](https://travis-ci.org/extentsoft/devops-node.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/extentsoft/devops-node/badge.svg?branch=master)](https://coveralls.io/github/extentsoft/devops-node?branch=master)
[![codecov](https://codecov.io/gh/extentsoft/devops-node/branch/master/graph/badge.svg)](https://codecov.io/gh/extentsoft/devops-node)
![alt text](https://david-dm.org/extentsoft/devops-node.svg)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fextentsoft%2Fdevops-node.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fextentsoft%2Fdevops-node?ref=badge_shield)
[![Known Vulnerabilities](https://snyk.io/test/github/extentsoft/devops-node/badge.svg)](https://snyk.io/test/github/extentsoft/{repo})




cache:
  directories:
      - node_modules
before_script:
  - "npm install -g gulp-cli"
install:
  - "npm install"
script:
  - "npm test"

