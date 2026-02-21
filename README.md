# Data-Driven Wisconsin

This repository contains the code to the Data-Driven Wisconsin (DDW) website.

This repository has been migrated to exist under the Organization: _datadrivenwisconsin_

## Local Development

### Windows

Perform the following steps in your terminal.

1. Enter `git clone <HTTPS url>`

    To find the URL:

        a. Click on the green `<> Code` dropdown 

        b. Click on HTTPS

        c. Copy the URL

2. If you've got code changes to make, checkout to a feature branch using the command: `git checkout -b feature/your-feature-name` 

3. In the terminal, create a virtual environment using: `python -m venv .venv`

3. Activate the virtual environment using: `.\.venv\Scripts\Activate.ps1`

4. Install dependencies: `pip install -r .\requirements.txt`

5. Run `pelican -r -l` and navigate to the serving site at the given address.

### iOS

1. `git clone https://github.com/datadrivenwisconsin/ddw.git`

2. `cd ddw`

3. `python3 -m venv .venv`

4. `source .venv/bin/activate`

5. `pip install -r requirements.txt`

6. `pelican -r -l`


## Deployment

All deployments occur from `main`. To deploy your changes:

1. Open a pull request from your feature branch into `main`.
2. After the PR is reviewed and merged, the site will deploy from `main`.


## Mobile View (on Chrome)

For mobile view, follow the below steps: 

Step 1: Open the website in Google Chrome. You might have to navigate to http://127.0.0.1:8000

Step 2: Hit F12 > Inspect to open up Chrome DevTools.

Step 3: Hit the Toggle Device Toolbar
