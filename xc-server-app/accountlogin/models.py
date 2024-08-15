from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    mobile = models.CharField(max_length=15, unique=True)
    mpin = models.CharField(max_length=6)