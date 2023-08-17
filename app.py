from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

SPOONACULAR_API_KEY = 'ad00caffb012448082150f6c32a9ae74'

@app.route('/recipes')
def get_recipes():
    try:
        search_query = request.args.get('query')
        api_url = f'https://api.spoonacular.com/recipes/complexSearch?apiKey={SPOONACULAR_API_KEY}&query={search_query}'

        response = requests.get(api_url)
        recipes = response.json().get('results', [])

        return jsonify(recipes)
    except Exception as e:
        print(e)
        return jsonify(error='Internal server error'), 500

if __name__ == '__main__':
    app.run(port=3000)