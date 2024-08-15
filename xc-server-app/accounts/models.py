from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile = models.CharField(max_length=15, unique=True)
    mpin = models.CharField(max_length=6)  # Assuming MPIN is a 6-digit number

    def __str__(self):
        return f'{self.user.username} Profile'