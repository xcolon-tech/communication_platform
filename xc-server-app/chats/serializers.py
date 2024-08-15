from rest_framework import serializers
from .models import Contact, Message

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['user', 'profile_picture', 'last_seen']


class MessageSerializer(serializers.ModelSerializer):
    sender = ContactSerializer(read_only=True)
    recipient = ContactSerializer(read_only=True)

    class Meta:
        model = Message
        fields = ['sender', 'recipient', 'message', 'timestamp', 'is_read']
