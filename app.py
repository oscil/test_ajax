from flask import Flask, render_template, request, url_for

app = Flask(__name__)


@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/data/name.txt', methods=['GET', 'POST'])
def data():
    for i in request.args:
        print(i)
    return "HUK"

#add comment
@app.route('/getjson', methods=['GET', 'POST'])
def json_data():
    for i in request.args:
        print(i)
    return """ { "firstName":"Oscil",
                 "lastName":"Bobrik",
                 "likesChineseFood": false,
                 "numberOfDisplays":2 
    }
    """


if __name__ == '__main__':
    print('Ran as main')
    app.run(host='0.0.0.0', port=15000, debug=True)
