from flask import Flask, request, send_file
from flask_cors import CORS
from model import Main
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/tool', methods=['POST'])
def tool():
    try:
        # Get file
        file = request.files['file']
        # Save file
        file.save('data.csv')
        # Import model
        model = Main('data.csv')
        # Get parameters
        topics = int(request.form['topics'])
        passes = int(request.form['accuracy'])
        words = int(request.form['words'])
        # Run model
        data =  model.run(topics=topics, passes=passes, iterations=1200, words=words)
        # Create a dataframe with columns 'Topic' and 'Words' and removing the fiability of the words
        df = pd.DataFrame(columns=['Topic', 'Words'])

        # Iterate over the data
        for topic in data:
            
            words = topic[1].split(' + ')
            for word in words:
                word = word.split('*')[1]
                word = word.replace('"', '')    
                # Create columns with topic number and rows with words
                df = df._append({'Topic': int(topic[0] + 1), 'Words': word}, ignore_index=True)

        # Save the dataframe as a csv file
        df.to_csv('client.csv', index=False)
        # Read the csv file
        file = pd.read_csv('client.csv')
        # Convert the csv file to a json file
        file.to_json('client.json', orient='records')
        # Send the json file to the client
        return send_file('client.json', mimetype='application/json', as_attachment=True)
    
    
    except Exception as e:
        return {'error': str(e), 'status': 500}

if __name__ == '__main__':
    app.run(debug=True)