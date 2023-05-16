import pandas as pd
from gensim import corpora, models

class Main:
    
    def __init__(self, path: str) -> None:
        self.path = path

    def get_data(self) -> pd.DataFrame:
        return pd.read_csv(self.path)
    
    def get_keywords(self) -> list:
        return self.get_data()['Keyword'].tolist()
    
    def get_dictionary(self) -> corpora.Dictionary:
        return corpora.Dictionary([self.get_keywords()])
    
    def get_corpus(self) -> list:
        return [self.get_dictionary().doc2bow([text]) for text in self.get_keywords()]

    def get_lda_model(self, topics: int, passes: int, iterations: int) -> models.ldamodel.LdaModel:
        return models.ldamodel.LdaModel(self.get_corpus(), num_topics=topics, id2word=self.get_dictionary(), passes=passes, iterations=iterations)

    def get_lda_model_topics(self, model : models.ldamodel.LdaModel, words) -> list:
        return  model.print_topics(num_words=words)

    def run (self, topics: int, passes: int, iterations: int, words:int) -> None:
        model = self.get_lda_model(topics=topics, passes=passes, iterations=iterations)
        return self.get_lda_model_topics(model, words=words)