export interface PredictionData {
  Pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  BMI: number;
  DiabetesPedigreeFunction: number;
  Age: number;
  [key: string]: any;
}
export interface FitnessPlanRequest {
  age: number;
  weight: number;
  goals: string;
}
export interface TranslationRequest {
  text: string;
  targetLanguage: string;
}

export interface TextImproveRequest {
  text: string;
}

export interface ArticleSummaryRequest {
  article: string;
}
