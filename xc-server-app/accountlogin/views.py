from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Profile
from .serializers import LoginSerializer

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            mobile = serializer.validated_data['mobile']
            user = Profile.objects.get(mobile=mobile).user
            # If you're using token authentication:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message": "Login successful",
                "token": token.key,
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)