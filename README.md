# Runme.dev Website

This is the website for the Runme VS Code Extension.

# Set-up

The project is using Begin for creating functional web-apps. You can install it by calling:

```sh
# Mac, Linux:
curl -sS https://dl.begin.com/install.sh | sh
```
or
```sh
# Windows:
iwr https://dl.begin.com/install.ps1 -useb | iex
```

# run app

```sh
begin dev
```

# Add a new element
```sh
begin new element -n example-element
```

# Add a new page
```sh
begin new page --path hello/example3
```

# Add a dynamic page
```sh 
begin new page --path boom --type js
```

# Deploy to Begin 
```sh
begin deploy
```