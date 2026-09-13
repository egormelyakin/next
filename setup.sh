#!/usr/bin/env sh
set -e

if git remote get-url origin 2>/dev/null | grep -q 'egormelyakin/next'; then rm -rf .git; fi

sed '/^# Lock files/,/^$/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore
rm -f README.md LICENSE setup.sh

bun update --latest
git init -b main && git add -A && git commit -m "Empty project"
