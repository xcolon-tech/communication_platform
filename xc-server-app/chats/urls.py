from django.urls import path
from .views import ChatListView, MessageListView, SendMessageView

urlpatterns = [
    path('chats/', ChatListView.as_view(), name='chat-list'),
    path('chats/<int:recipient_id>/messages/', MessageListView.as_view(), name='message-list'),
    path('chats/send/', SendMessageView.as_view(), name='send-message'),
    path('chats/typing/', TypingStatusView.as_view(), name='typing-status'),
    path('chats/online/', OnlineStatusView.as_view(), name='online-status'),
]