from django.contrib.auth.models import User
from django.db import models

class UserSettings(models.Model):
    LANGUAGE_CHOICES = [
        ('EN', 'English'),
        ('ES', 'Spanish'),
        ('FR', 'French'),
        ('DE', 'German'),
        ('ZH', 'Chinese'),
        # Add more languages as needed
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='settings')
    default_language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES, default='EN')

    intelligent_conversations = models.BooleanField(default=True)
    adaptive_recommendations = models.BooleanField(default=True)
    security_enhancement = models.BooleanField(default=True)
    smart_assistance = models.BooleanField(default=True)
    sentiment_analysis = models.BooleanField(default=True)

    multi_lingual_support = models.BooleanField(default=True)
    security_compliance = models.BooleanField(default=True)

    def __str__(self):
        return f"Settings for {self.user.username}"