from flask import Flask, request
from flask_cors import CORS
from model import Main
import pandas as pd


app = Flask(__name__)
CORS(app)


@app.route('/tool', methods=['POST'])
def tool():
    formData = request.form
    formData.get('file').save('data.csv')
    # Return the first column of the csv file as a list
    return {'result': Main('data.csv').get_data()['Keyword'].tolist()}


if __name__ == '__main__':
    app.run(debug=True)