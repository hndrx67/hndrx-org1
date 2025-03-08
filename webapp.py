from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/segs1')
def segs1():
    return render_template("SEGS1.html")  # Ensure the filename matches exactly

if __name__ == "__main__":
    app.run(debug=True)
