from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile

class LoginSerializer(serializers.Serializer):
    mobile = serializers.CharField(max_length=15)
    mpin = serializers.CharField(max_length=6)

    def validate(self, data):
        mobile = data.get('mobile')
        mpin = data.get('mpin')

        try:
            profile = Profile.objects.get(mobile=mobile)
        except Profile.DoesNotExist:
            raise serializers.ValidationError("Invalid mobile number or MPIN")

        if profile.mpin != mpin:
            raise serializers.ValidationError("Invalid mobile number or MPIN")

        return data