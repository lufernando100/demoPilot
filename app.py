from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=['GET'])
def hello():
    return {"message": "Hello, World!"}

if __name__ == '__main__':
    app.run(debug=True)
