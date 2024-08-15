from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    about_me = models.TextField(max_length=500, blank=True)
    mobile = models.CharField(max_length=15, blank=True)
    mpin = models.CharField(max_length=4, blank=True)
    online_status = models.BooleanField(default=True)  # Field for managing online status

    def __str__(self):
        return self.user.username