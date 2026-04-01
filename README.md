# Data-Driven Wisconsin Web Site

This repository contains the code to the Data-Driven Wisconsin (DDWI) conference website.
The web site is implemented using the [Pelican](https://getpelican.com/) framework.

## Setup Instructions

### Windows

Perform the following steps in your terminal.

1. Enter `git clone git@github.com:datadrivenwisconsin/datadrivenwisconsin.github.io.git`
1. In the terminal, create a virtual environment using: `python -m venv venv`
1. Activate the virtual environment using: `.\venv\Scripts\Activate.ps1`
1. Install dependencies: `pip install -r .\requirements.txt`
1. Run `pelican -r -l` and navigate to the serving site at the given address.

### iOS

1. `git clone https://github.com/datadrivenwisconsin/ddw.git`

2. `cd ddw`

3. `python3 -m venv .venv`

4. `source .venv/bin/activate`

5. `pip install -r requirements.txt`

6. `pelican -r -l`

### Making Changes
We've disabled direct commits to `main`.  All changes must be done on a feature branch and merged through a pull request.
If you've got code changes to make:

1. Checkout to a feature branch using the command: `git checkout -b <your-feature-name>`
1. Make changes
1. Commit changes
1. Push branch to GitHub: `git push --set-upstream origin <your-feature-name>`
1. Open a pull request

Once the pull request has been reviewed and merged, you can see the latest changes in `main` by:

1. Checkout the `main branch` locally: `git checkout main`
1. Pull the changes: `git pull`

### Deploying the Web Site
All commits to the `main` branch trigger a GitHub Action that builds the static site files and deploys them.

### Mobile View (on Chrome)

For mobile view, follow the below steps: 

1. Open the website in Google Chrome. You might have to navigate to http://127.0.0.1:8000
1. Hit F12 > Inspect to open up Chrome DevTools
1. Hit the Toggle Device Toolbar
