import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from mailjet_rest import Client
from response_mail import ResponseEmail

response = ResponseEmail()
app = Flask(__name__)
CORS(app)

RECAPTCHA_SECRET_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

def verify_recaptcha(token):
    response = requests.post('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', data={
        'secret': RECAPTCHA_SECRET_KEY,
        'response': token
    })
    result = response.json()
    return result.get('success', False) and result.get('score', 0) > 0.9

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    recaptcha_token = data.get('recaptchaToken')

    if not verify_recaptcha(recaptcha_token):
        return jsonify({"status": "error", "message": "reCAPTCHA verification failed"}), 400

    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    if not all([name, email, subject, message]):
        return jsonify({"status": "error", "message": "Please fill all fields to proceed"}), 400
    
    # Example Mailjet Email Sending Logic
    api_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    api_secret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    mailjet = Client(auth=(api_key, api_secret), version='v3.1')

    email_data = {
        'Messages': [
            {
                "From": {
                    "Email": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                    "Name": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                },
                "To": [
                    {
                        "Email": 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                        "Name": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                    }
                ],
                "Subject": 'You have received a new user message.',
                "TextPart": "",
                "HTMLPart": f'''<div style="width: 100%; display: flex; height: auto; margin: auto; justify-content: center; align-items: center; background-color: #f0f0f0;">
                                    <div style="width: 100%; max-width: 600px; height: 100%; justify-content: center; align-items: center; max-height: 600px; background: #000; border-radius: 10px; margin: 10px auto; padding: 20px;">
                                        <div style="justify-content: center; align-items: center; margin: auto; padding: 15px 0px;">
                                            <h2 style="font-size: 1.4em; color: #fff; text-align: left;">Dear Quinn Daisies,</h2>
                                            <h5 style="font-size: 0.8em; color: #fff; text-align: left;">You have received a new user message. Please find the details below:</h5>
                                        </div>
                                        <div style="justify-content: flex-start; align-items: flex-start; margin: auto;">
                                            <p style="font-size: .8em; font-weight: 500; color: #fff; text-align: left;">From: {name} ({email})</p>
                                            <p style="font-size: .8em; font-weight: 500; color: #fff; text-align: left;">Subject: {subject}</p>
                                            <p style="font-size: .8em; font-weight: 500; color: #fff; text-align: left;">Message: {message}</p>
                                        </div>
                                    </div>
                                </div>
                                ''',
                "CustomID": "AppGettingStartedTest"
            }
        ]
    }
    
    result = mailjet.send.create(data=email_data)
    print("Mailjet API response:", result.status_code, result.json())  # Add this line for debugging
    
    if result.status_code == 200:
        response.send_mail(email, name)
        return jsonify({"status": "success", "message": "Message sent successfully"}), 200
    else:
        return jsonify({"status": "error", "message": "Failed to send email"}), 500

if __name__ == '__main__':
    app.run(debug=True)