#!/bin/bash

# script to run Flask app
# this assumes the current Python venv is called "pyenv" and is in the backend/app/ directory
source backend/pyenv/Scripts/activate && pip install -r backend/requirements.txt && cd backend/app && export FLASK_APP=__init__.py && flask run --host=0.0.0.0