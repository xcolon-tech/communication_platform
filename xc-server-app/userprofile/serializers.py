from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['profile_image', 'about_me', 'mobile', 'mpin', 'online_status']

class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'profile']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)

        if 'password' in validated_data:
            instance.set_password(validated_data['password'])

        instance.save()

        profile.profile_image = profile_data.get('profile_image', profile.profile_image)
        profile.about_me = profile_data.get('about_me', profile.about_me)
        profile.mobile = profile_data.get('mobile', profile.mobile)
        profile.mpin = profile_data.get('mpin', profile.mpin)
        profile.online_status = profile_data.get('online_status', profile.online_status)
        profile.save()

        return instance