from django.urls import path
from .views import UserProfileView, OnlineStatusUpdateView

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/online-status/', OnlineStatusUpdateView.as_view(), name='online-status-update'),
]