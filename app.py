from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    return jsonify({"status": "success", "data": data})

if __name__ == '__main__':
    app.run(debug=True)
