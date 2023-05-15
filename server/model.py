from gensim.models import KeyedVectors

# Cargar el modelo
model_path = 'crawl-300d-2M.vec'
model = KeyedVectors.load_word2vec_format(model_path, binary=False)

# Obtener el vector de una palabra
word = 'fruta'
vector = model[word]

# Realizar operaciones con los vectores
# Por ejemplo, encontrar las palabras más similares a 'fruta'
similar_words = model.most_similar(word)

# Imprimir los resultados
print(f'Vector de "{word}": {vector}')
print(f'Palabras similares a "{word}":')
for similar_word, similarity in similar_words:
    print(similar_word, similarity)
