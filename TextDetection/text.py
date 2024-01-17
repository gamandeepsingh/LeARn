from flask import Flask, render_template, request
import cv2
import pytesseract
import os

app = Flask(__name__)

pytesseract.pytesseract.tesseract_cmd = r'D:\collegeproject\ocr\tesseract.exe'

UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def detect_text(image_path):
    image = cv2.imread(image_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, binary_image = cv2.threshold(gray_image, 128, 255, cv2.THRESH_BINARY)
    extracted_text = pytesseract.image_to_string(binary_image)
    
    detected_words = []

    if 'volcano' in extracted_text.lower():
        detected_words.append('volcano')
    if 'photosynthesis' in extracted_text.lower():
        detected_words.append('photosynthesis')

    result_string = ', '.join(detected_words)
    return result_string


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return render_template('index.html', result="No file provided")

    file = request.files['file']

    if file.filename == '':
        return render_template('index.html', result="No file selected")

    if file:
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        result = detect_text(filename)
        return render_template('index.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
