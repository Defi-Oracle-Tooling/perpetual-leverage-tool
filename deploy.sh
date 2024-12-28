#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment process...${NC}"

# Check if repository URL is provided
if [ -z "$1" ]; then
  echo -e "${RED}Please provide your repository URL${NC}"
  echo "Usage: ./deploy.sh <repository-url>"
  exit 1
fi

REPO_URL=$1

# Install dependencies
echo -e "${GREEN}Installing dependencies...${NC}"
pnpm install

# Run tests
echo -e "${GREEN}Running tests...${NC}"
pnpm test -- --watchAll=false

# Run linting
echo -e "${GREEN}Running linting...${NC}"
pnpm lint

# Run format
echo -e "${GREEN}Formatting code...${NC}"
pnpm format

# Build the project
echo -e "${GREEN}Building the project...${NC}"
pnpm build

# Initialize git if not already initialized
if [ ! -d .git ]; then
  echo -e "${GREEN}Initializing git repository...${NC}"
  git init
fi

# Check if remote origin exists
if ! git remote | grep -q "^origin$"; then
  echo -e "${GREEN}Adding remote origin...${NC}"
  git remote add origin $REPO_URL
fi

# Stage all files
echo -e "${GREEN}Staging files...${NC}"
git add .

# Commit changes
echo -e "${GREEN}Committing changes...${NC}"
git commit -m "Deploy to GitHub Pages"

# Push to main branch
echo -e "${GREEN}Pushing to main branch...${NC}"
git push -u origin main

# Deploy to GitHub Pages
echo -e "${GREEN}Deploying to GitHub Pages...${NC}"
pnpm deploy

echo -e "${GREEN}Deployment complete!${NC}" 