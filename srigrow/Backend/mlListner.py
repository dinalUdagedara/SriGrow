from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load the saved model
model_path = r"C:\Users\HP\Desktop\ML-Model\ML-model-SDGP.pkl"
rf_regressor = joblib.load(model_path)

# Define the function to predict maximum precipitation
def predict_max_precipitation(city, start_date, end_date, model):
    # Preprocess user input
    start_date = pd.to_datetime(start_date)
    end_date = pd.to_datetime(end_date)

    # Generate a sequence of dates within the specified time period
    date_range = pd.date_range(start=start_date, end=end_date)

    # Prepare features for prediction
    prediction_features = pd.DataFrame({
        'city_Colombo': [1 if city.lower() == 'colombo' else 0] * len(date_range),
        'year': date_range.year,
        'month': date_range.month,
        'day': date_range.day
    })

    # Make predictions for each date
    predictions = model.predict(prediction_features)

    # Calculate maximum precipitation
    max_precipitation = predictions.max()
    return max_precipitation


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    city = data['city']
    start_date = data['start_date']
    end_date = data['end_date']

    max_precipitation = predict_max_precipitation(city, start_date, end_date, rf_regressor)
    
    # Prepare the response data
    response_data = {'max_precipitation': max_precipitation}
    
    return jsonify(response_data)


if __name__ == '__main__':
    app.run(debug=True, port=5001)
