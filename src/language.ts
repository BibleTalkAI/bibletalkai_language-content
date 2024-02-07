export interface LanguageObject {
  [key: string]: object;
}

export interface Language<TObject> {
  [key: string]: TObject;
}