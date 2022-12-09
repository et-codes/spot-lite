from flask import Flask, request
from flask_restful import Resource, Api
import logging
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv


logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()

app = Flask(__name__)
api = Api(app)

class Search(Resource):
    def __init__(self):
        auth = SpotifyClientCredentials()
        self.sp = spotipy.Spotify(auth_manager=auth)

    def get(self, search_term) -> None:
        try:
            result = self.sp.search(q=search_term, type="album", limit=1, market="US")
        except Exception as err:
            logger.error(f'{err=}')
            return f'ERROR: {err=}', 500
        return result, 200

api.add_resource(Search, '/api/search/<string:search_term>')


if __name__ == '__main__':
    app.run()
