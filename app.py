from flask import Flask, render_template, request
from morse_dict import MORSE_CODE

app = Flask(__name__)


def text_to_morse(text):
    morse_output = []
    for char in text.upper():
        if char in MORSE_CODE:
            morse_output.append(MORSE_CODE[char])
        else:
            morse_output.append("?")
    return " ".join(morse_output)


@app.route("/", methods=["GET", "POST"])
def home():
    morse = ""

    if request.method == "POST":
        user_text = request.form.get("text")
        morse = text_to_morse(user_text)

    return render_template("index.html", morse=morse)


if __name__ == "__main__":
    app.run(debug=True)