#!/usr/bin/env python

from flask import Flask
from flask import render_template
from flask.ext.assets import Environment
from flask.ext.assets import Bundle

app = Flask(__name__, static_url_path='')
assets = Environment(app)

css = Bundle('scss/base.scss', filters='pyscss', output='css/base.css')
assets.register('css_all', css)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/snippets', methods=['POST'])
def create_snippet():
    pass

@app.route('/<snippet_id>', methods=['GET'])
@app.route('/snippets/<snippet_id>', methods=['GET'])
def view_snippet(snippet_id):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
