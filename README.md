# action-sharepoint-publish
This GitHub action is forked from a repo that deployed project archives to SharePoint Online. The action is modified to deploy build folders of a React app.

## Inputs

#### `site_url`

**Required** The complete url of your sharepoint site. Example : `https://you.sharepoint.com/sites/mySite`

#### `library_folder`

**Required** The path relative to the library where to upload a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

#### `sharepoint_user`

**Required** The username to use for authentication. Example `roger.tester@mydomain.com`.

#### `sharepoint_password`

**Required** The user's password. Example `MyPassword123!`. 

> :bulb: Tip : It is recommended to use GitHub Actions Secrets to store sensible informations like passwords

## Example usage 

This action is particularly useful when triggered by new releases :

```yml
name: SharePoint Deploy

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  publish:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [12.x]
    
    steps:
    
    - name: Cloning repository
      uses: actions/checkout@v2
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install packages
      run: npm install
    
    - name: Build page
      run: npm run build
      env:
        CI: false
        
    - name: Remove everything except build folder
      run: ls . | grep -v "build" | xargs rm -r

    - name: Deploy to Sharepoint
      uses: harsohailB/action-sharepoint-publish@v1.0.3
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_user: ${{ secrets.USER }}
       sharepoint_password: ${{ secrets.PASSWORD }}
```

