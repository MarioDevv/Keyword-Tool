from dotenv import load_dotenv
import pandas as pd
import os
import textrazor

# Load env variables
load_dotenv()

class Main():
    def __init__(self, path: str):
        self.path = path

    def get_data(self) -> pd.DataFrame:
        return pd.read_csv(self.path, usecols=[0,2], index_col=0)

    def run(self) -> None:
        print(self.get_data())


class TextRazor():
    def __init__(self, API_KEY: str):
        self.API_KEY = API_KEY
        self.client = textrazor.TextRazor(self.API_KEY)
        self.client.set_extractors(["entities", "topics", "words"])

    def get_topics(self, url: str) -> list:
        response = self.client.analyze_url(url)
        return [topic.label for topic in response.topics()]

    def get_entities(self, url: str) -> list:
        response = self.client.analyze_(url)
        return [entity.id for entity in response.entities()]

    def get_words(self, url: str) -> list:
        response = self.client.analyze_(url)
        return [word.token for word in response.words()]



if __name__ == "__main__":
    API_KEY = os.environ.get("API_KEY")
    PATH = "./public/data2.csv"
    obj = Main(PATH)    
    Ai = TextRazor(API_KEY)
    print(Ai.get_topics("https://www.scnsoft.com/"))