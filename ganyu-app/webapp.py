from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Define route for the main page
@app.route('/')
def home():
    return render_template('index.html')

# Define route for the gallery page
@app.route('/gallery')
def gallery():
    # In a real application, you would scan a directory or use a database
    images = [
        {"id": 1, "title": "Ganyu Portrait", "filename": "ganyu_portrait.png", "description": "Official character portrait of Ganyu", "source": "https://genshin.hoyoverse.com/en/character/liyue?char=8"},
        {"id": 2, "title": "Ganyu Swimsuit Segs", "filename": "Ganyu.full.4410036.png", "description": "Ganyu in her Swimsuit, ready to have segs", "source": "https://genshin.hoyoverse.com/en/character/liyue?char=8"},
        {"id": 3, "title": "Ganyu with Keqing", "filename": "Genshin.Impact.full.4429792.png", "description": "Ganyu and Keqing, having segs after work", "source": "https://www.hoyolab.com/article/1266343"},
        {"id": 4, "title": "Feet", "filename": "Ganyu.full.4401516.jpg", "description": "Time to Lick her feet, up to her armpits", "source": "https://www.hoyolab.com/article/2143789"},
        {"id": 5, "title": "Ganyu Swimsuit Again but Angry", "filename": "Ganyu.full.4390026.jpg", "description": "It's the title, but its segs time!", "source": "https://genshin.hoyoverse.com/en/character/liyue?char=8"},
        {"id": 6, "title": "???", "filename": "Ganyu.full.4376112.png", "description": "It's all over the place, it's my 69th time already.", "source": "https://www.hoyolab.com/article/3564212"}
    ]
    return render_template('gallery.html', images=images)

# Route to serve images for download
@app.route('/download/<filename>')
def download(filename):
    return send_from_directory(
        os.path.join(app.root_path, 'static', 'images'),
        filename,
        as_attachment=True
    )

if __name__ == '__main__':
    app.run(debug=True)