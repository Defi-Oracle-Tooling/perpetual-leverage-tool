#!/bin/bash

# Define the project root directory
PROJECT_ROOT=~/Cursor_Projects/perpetual-leverage-tool/

# Create the main project directories
mkdir -p $PROJECT_ROOT/assets/css
mkdir -p $PROJECT_ROOT/assets/js
mkdir -p $PROJECT_ROOT/assets/img/icons
mkdir -p $PROJECT_ROOT/assets/fonts
mkdir -p $PROJECT_ROOT/components
mkdir -p $PROJECT_ROOT/data/templates
mkdir -p $PROJECT_ROOT/data/output
mkdir -p $PROJECT_ROOT/docs

# Create the CSS files
touch $PROJECT_ROOT/assets/css/styles.css
touch $PROJECT_ROOT/assets/css/bootstrap.min.css
touch $PROJECT_ROOT/assets/css/dark-mode.css

# Create the JavaScript files
touch $PROJECT_ROOT/assets/js/main.js
touch $PROJECT_ROOT/assets/js/chart.js
touch $PROJECT_ROOT/assets/js/mode-toggle.js
touch $PROJECT_ROOT/assets/js/bootstrap.bundle.min.js

# Create the image files
touch $PROJECT_ROOT/assets/img/logo.png
touch $PROJECT_ROOT/assets/img/icons/.gitkeep # Placeholder to ensure the icons directory is created

# Create the font files
touch $PROJECT_ROOT/assets/fonts/custom-font.woff2
touch $PROJECT_ROOT/assets/fonts/bootstrap-icons.woff2

# Create the component files
touch $PROJECT_ROOT/components/navbar.html
touch $PROJECT_ROOT/components/footer.html
touch $PROJECT_ROOT/components/calculator.html
touch $PROJECT_ROOT/components/about.html

# Create the data files
touch $PROJECT_ROOT/data/templates/example-csv.csv
touch $PROJECT_ROOT/data/output/strategy_results.csv

# Create the documentation files
touch $PROJECT_ROOT/docs/README.md
touch $PROJECT_ROOT/docs/user-guide.md
touch $PROJECT_ROOT/docs/dev-guide.md

# Create the main project files
touch $PROJECT_ROOT/index.html
touch $PROJECT_ROOT/chart.html
touch $PROJECT_ROOT/LICENSE
touch $PROJECT_ROOT/.gitignore

# Print completion message
echo "Project structure created successfully in $PROJECT_ROOT"

