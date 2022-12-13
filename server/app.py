from flask import Flask
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
auth = SpotifyClientCredentials()
sp = spotipy.Spotify(auth_manager=auth)


@app.route("/api/<string:search_type>/<string:search_term>")
def get_search_results(search_type, search_term) -> None:
    try:
        result = sp.search(q=search_term, type=search_type, limit=2, market="US")
    except Exception as err:
        return f"ERROR: {err=}", 500
    return result, 200


if __name__ == "__main__":
    app.run()
