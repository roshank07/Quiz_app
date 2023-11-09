import pandas as pd
import json

# Read Excel file into a pandas DataFrame
excel_file_path = 'data.xlsx'
df = pd.read_excel(excel_file_path)

# Assuming the values are in a column named 'choices'
df['choices'] = df['choices'].apply(lambda x: [(value.strip()) for value in x.strip('()').split(',')])

# Convert DataFrame to JSON
json_data = df.to_json(orient='records')

# Print or save the JSON data
print(json_data)

# Save the JSON data to a file
with open('question.json', 'w') as json_file:
    json_file.write(json_data)
