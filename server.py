import json #api
from urllib.request import urlopen #api
from flask import Flask, render_template, url_for, request, redirect, send_from_directory, session, flash #flask

app = Flask(__name__)


def get_planets():
    web_url_planets = urlopen("https://swapi.dev/api/planets") # This will return a string containing the data in JSON format
    data = web_url_planets.read()
    response_data_planets = json.loads(data.decode('utf-8')) # parse the JSON and convert it into a dict
    return response_data_planets


@app.route("/")
def print_table_to_main_page():
    planets = get_planets()
    planets = planets['results']
    print(planets)
    return render_template("main_page.html", planets=planets)


if __name__ == "__main__":
    app.run(debug=True)
