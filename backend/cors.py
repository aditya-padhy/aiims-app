from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1vGB-gWX5vfp9I0KANVoFDnq8fsIRsDMtFs-rBGKg0j_lhQuugdlxoesq99RtOkWu4Q/exec"

@app.route('/submit-section-a', methods=['POST'])
def submit_section_a():
    # Forward the form data as x-www-form-urlencoded to Google Apps Script
    resp = requests.post(
        GOOGLE_SCRIPT_URL,
        data=request.form  # This will forward the form fields as form data
    )
    print("Google Apps Script response:", resp.text)  # For debugging
    try:
        result = resp.json()
    except Exception:
        result = {'result': 'error', 'raw': resp.text}
    return jsonify(result), resp.status_code

# Allow preflight requests (CORS)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
    return response

if __name__ == '__main__':
    app.run(port=5000, debug=True)
