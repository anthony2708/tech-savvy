# Tech-savvy

## Introduction

A repository for all the tech-savvy people out there. This repository contains all the important links and resources for the learning process of Anthony. It also contains the source code for:

- Graduation Thesis of Tuan Anh Bui Le, a former student from the Faculty of Information Technology, Vietnam National University of Ho Chi Minh City - University of Science.
- Official website of Tuan Anh Bui Le.

## Project Structure

```
.
└── tech-savvy/
    ├── .github/
    │   ├── ISSUE_TEMPLATE/ # All templates for issues
    │   ├── workflows/ # All workflows for Github Actions
    │   └── bitbucket-pipelines.yml # Bitbucket Pipelines configuration file for the Graduation Thesis
    │   └── CODE_OF_CONDUCT.md # Code of Conduct file
    │   └── CONTRIBUTING.md # Contributing file
    │   └── dependabot.yml # Dependabot configuration file
    ├── graduation/ # All files for the Graduation Thesis
    │   ├── aws/ # All files for the webapp
    │   ├── includes/ # All files for the states management
    │   └── scripts/ # All files for the automation scripts
    ├── assets/ # All files for references (not used for Graduation Thesis)
    │   ├── else/
    │   ├── THPTQG/
    ├── .gitignore # Git ignore file
    ├── coding/ # All files for the coding practice
    |   ├── portal/ # All files for the Portal website
    │   ├── golang/ # All files for the Golang practice
    │   ├── python/ # All files for the Python practice
    |   ├── react-games/ # All files for the React 2048 game old webapp
    ├── docker/ # All files for the Docker practice
    │   ├── localstack/ # All files for the LocalStack project
    │   ├── moodle/ # All files for the Moodle project
    ├── LICENSE # License file
    └── Readme.md # This file
```

## Notices

Before working with this repository, please make sure that you have installed all the
dependencies with latest versions. To check if anything is not working,
run this script **at the root folder of this repository**:

```bash
bash graduation/scripts/dependencies.sh
```
