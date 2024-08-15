from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile

class RegisterSerializer(serializers.ModelSerializer):
    mobile = serializers.CharField(required=True)
    mpin = serializers.CharField(required=True, min_length=4, max_length=6, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'mobile', 'mpin']

    def create(self, validated_data):
        username = validated_data['username']
        mobile = validated_data['mobile']
        mpin = validated_data['mpin']

        user = User.objects.create(username=username)
        Profile.objects.create(user=user, mobile=mobile, mpin=mpin)
        return user