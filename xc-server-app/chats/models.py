from django.contrib.auth.models import User
from django.db import models

class Contact(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    last_seen = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username


class Message(models.Model):
    sender = models.ForeignKey(Contact, related_name='sent_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(Contact, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.sender} -> {self.recipient}: {self.message[:50]}"

class Contact(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)  # Optional
    last_seen = models.DateTimeField(auto_now=True)
    online = models.BooleanField(default=False)  # Track online status

    def __str__(self):
        return self.user.username


class Message(models.Model):
    sender = models.ForeignKey(Contact, related_name='sent_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(Contact, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField(blank=True, null=True)
    media = models.FileField(upload_to='media/', null=True, blank=True)  # For images or file uploads
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    is_typing = models.BooleanField(default=False)  # Track typing status

    def __str__(self):
        return f"{self.sender} -> {self.recipient}: {self.message[:50]}"

