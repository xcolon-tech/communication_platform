export interface Settings {
  defaultLanguage: string;
  aiServices: {
    intelligentConversations: boolean;
    adaptiveRecommendations: boolean;
    securityEnhancement: boolean;
    smartAssistance: boolean;
    sentimentAnalysis: boolean;
  };
  others: {
    multiLingualSupport: boolean;
    securityCompliance: boolean;
  };
}
