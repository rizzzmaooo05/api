from flask import Flask
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('https://raw.githubusercontent.com/rizzzmaooo05/my-portofolio/main/msib-startup-campus/dataset/heart.csv')

X = df.drop(columns = 'target')
y = df.target

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size = 0.2,
    stratify = y,
    random_state = 42
)

model = KNeighborsClassifier()
model.fit(X_train, y_train)

app = Flask(__name__)

@app.route('/')
def index():
    test_data = X_test
    test_data['target'] = model.predict(test_data)

    return test_data.to_html()


if __name__ == '__main__':
    app.run(debug=True)