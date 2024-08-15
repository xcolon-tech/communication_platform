from rest_framework import generics
from .models import Contact, Message
from .serializers import ContactSerializer, MessageSerializer
from django.contrib.auth.models import User

class ChatListView(generics.ListAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.filter(user=self.request.user)


class MessageListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        contact = Contact.objects.get(user=self.request.user)
        recipient_id = self.kwargs['recipient_id']
        recipient = Contact.objects.get(id=recipient_id)
        return Message.objects.filter(sender=contact, recipient=recipient) | Message.objects.filter(sender=recipient, recipient=contact)


class SendMessageView(generics.CreateAPIView):
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        sender = Contact.objects.get(user=self.request.user)
        recipient_id = self.request.data.get('recipient')
        recipient = Contact.objects.get(id=recipient_id)
        serializer.save(sender=sender, recipient=recipient)

class ChatListView(generics.ListAPIView):
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.filter(user=self.request.user)


class MessageListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        contact = Contact.objects.get(user=self.request.user)
        recipient_id = self.kwargs['recipient_id']
        recipient = Contact.objects.get(id=recipient_id)
        return Message.objects.filter(sender=contact, recipient=recipient) | Message.objects.filter(sender=recipient, recipient=contact)


class SendMessageView(generics.CreateAPIView):
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        sender = Contact.objects.get(user=self.request.user)
        recipient_id = self.request.data.get('recipient')
        recipient = Contact.objects.get(id=recipient_id)
        serializer.save(sender=sender, recipient=recipient)


class TypingStatusView(generics.UpdateAPIView):
    serializer_class = MessageSerializer

    def patch(self, request, *args, **kwargs):
        contact = Contact.objects.get(user=self.request.user)
        recipient_id = request.data.get('recipient')
        recipient = Contact.objects.get(id=recipient_id)
        Message.objects.filter(sender=contact, recipient=recipient).update(is_typing=request.data.get('is_typing'))
        return Response(status=status.HTTP_200_OK)


class OnlineStatusView(generics.UpdateAPIView):
    serializer_class = ContactSerializer

    def patch(self, request, *args, **kwargs):
        contact = Contact.objects.get(user=self.request.user)
        contact.online = request.data.get('online', False)
        contact.save()
        return Response(status=status.HTTP_200_OK)