import pandas as pd

pd.read_csv('cities.csv', encoding='utf-8').to_html('data.html', index=False)