from flask import Flask
app= Flask (__name__)

@app.route('/')
def Home():
    return "Welcome!"

if __name__ == '_main_':
    app.run(debug=True)