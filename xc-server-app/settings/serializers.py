from rest_framework import serializers
from .models import UserSettings

class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = [
            'default_language',
            'intelligent_conversations',
            'adaptive_recommendations',
            'security_enhancement',
            'smart_assistance',
            'sentiment_analysis',
            'multi_lingual_support',
            'security_compliance'
        ]