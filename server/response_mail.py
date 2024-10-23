from mailjet_rest import Client


class ResponseEmail:
    def __init__(self):
        self.sender_email = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        self.api_key = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        self.api_secret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        self.subject = 'We have successfully received your mail!'

    def send_mail(self, recipient_email, recipient_name):
        message = '''<div style="width: 100%; display: flex; height: auto; margin: auto; justify-content: center; align-items: center; background-color: #f0f0f0;">
                        <div style="width: 100%; max-width: 600px; height: 100%; justify-content: center; align-items: center; max-height: 600px; background: #000; border-radius: 10px; margin: 10px auto; padding: 20px;">
                            <div style="justify-content: center; align-items: center; margin: auto; padding: 15px 0px;">
                                <h2 style="font-size: 1.4em; color: #fff; text-align: left;">Dear {{ recipient_name }},</h2>
                                <h5 style="font-size: 0.8em; color: #fff; text-align: left;">Your message has been received. We will respond to you as soon as possible.</h5>
                            </div>

                            <div style="justify-content: flex-start; align-items: flex-start; margin: auto;">
                                <p style="font-size: .8em; font-weight: 500; color: #fff; text-align: left;">Do need to schedule a meeting with us? Click on the button below to get started.</p>
                            </div>

                            <a href="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729167392/Quinn%20Daisies%20Tech/person-wearing-futuristic-virtual-reality-glasses-gaming_qvgzwq.jpg" style="width: max-content; padding: 10px 20px; margin: auto 0; height: auto; display: flex; justify-content: flex-start; align-items: flex-start; background-color: rgba(27, 157, 102); color: #fff; font-size: .8em; border-radius: 10px; text-decoration: none;">Schedule a meeting</a>
                        </div>
                    </div>
                '''
                
        try:
            mailjet = Client(
                auth=(self.api_key, self.api_secret), version='v3.1')

            data = {
                'Messages': [
                    {
                        "From": {
                            "Email": self.sender_email,
                            "Name": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                        },
                        "To": [
                            {
                                "Email": recipient_email,
                                "Name": recipient_name,
                            }
                        ],
                        "Subject": self.subject,
                        "TextPart": "",
                        "HTMLPart": message,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            }

            result = mailjet.send.create(data=data)

            # Check if the request was successful (status code 2xx)
            if result.status_code != 200:
                print(
                    f"Failed to send the email. MailJet API response: {result.json()}")
        except Exception as e:
            print(f"Error occurred while sending the automated response: {e}")
