from flask import Flask
from model import Main


app = Flask(__name__)
model = Main(path='data.csv') # Path to the csv file

@app.route('/tool')

def tool():
    response = model.run(topics=3, passes=10, iterations=1000, words=5)
    return response



if __name__ == '__main__':
    app.run(debug=True)