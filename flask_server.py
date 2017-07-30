from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return home()

@app.route('/add.html')
def add():
    return render_template('add.html')

@app.route('/determinant.html')
def determinant():
    return render_template('determinant.html')

@app.route('/multiply.html')
def multiply():
    return render_template('multiply.html')

@app.route('/subtract.html')
def subtract():
    return render_template('subtract.html')

@app.route('/transpose.html')
def transpose():
    return render_template('transpose.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)