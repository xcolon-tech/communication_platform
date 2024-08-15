# Social Media Scheduling Tool
Hosts Server Django Application for Social Media Scheduling Tool

# User Registration
curl -X POST http://127.0.0.1:8000/api/account/register/ \
-H "Content-Type: application/json" \
-d '{
    "username": "john_doe",
    "mobile": "1234567890",
    "mpin": "123456"
}'

# User Login
curl -X POST http://127.0.0.1:8000/api/accountlogin/login/ \
-H "Content-Type: application/json" \
-d '{
    "mobile": "1234567890",
    "mpin": "123456"
}'

# Get list of chats
curl -X GET http://127.0.0.1:8000/api/chat/chats/ \
-H "Authorization: Token your_token_here"

# Get the chat of specific user
curl -X GET http://127.0.0.1:8000/api/chat/chats/1/messages/ \
-H "Authorization: Token your_token_here"

# Send a message
curl -X POST http://127.0.0.1:8000/api/chat/chats/send/ \
-H "Content-Type: application/json" \
-H "Authorization: Token your_token_here" \
-d '{
    "recipient": 1,
    "message": "Hello, how are you?"
}'

# Update typing status
curl -X PATCH http://127.0.0.1:8000/api/chats/typing/ \
-H "Content-Type: application/json" \
-H "Authorization: Token your_token_here" \
-d '{"recipient": 1, "is_typing": true}'

# Update Online Status
curl -X PATCH http://127.0.0.1:8000/api/chats/online/ \
-H "Content-Type: application/json" \
-H "Authorization: Token your_token_here" \
-d '{"online": true}'

# Get User Profile
curl -X GET http://127.0.0.1:8000/api/profile/profile/ \
-H "Authorization: Token your_token_here"

# Update User Profile
curl -X PUT http://127.0.0.1:8000/api/profile/profile/ \
-H "Authorization: Token your_token_here" \
-F "username=new_username" \
-F "email=new_email@example.com" \
-F "profile.profile_image=@/path/to/new/image.jpg" \
-F "profile.about_me=New About Me"

# Delete Account
curl -X DELETE http://127.0.0.1:8000/api/profile/profile/ \
-H "Authorization: Token your_token_here"

# Update Online Status
curl -X PATCH http://127.0.0.1:8000/api/profile/online-status/ \
-H "Content-Type: application/json" \
-H "Authorization: Token your_token_here" \
-d '{"online_status": true}'

# Get User Settings
curl -X GET http://127.0.0.1:8000/api/settings/ \
-H "Authorization: Token your_token_here"

# Update User Settings
curl -X PUT http://127.0.0.1:8000/api/settings/ \
-H "Authorization: Token your_token_here" \
-H "Content-Type: application/json" \
-d '{
        "default_language": "EN",
        "intelligent_conversations": true,
        "adaptive_recommendations": false,
        "security_enhancement": true,
        "smart_assistance": true,
        "sentiment_analysis": true,
        "multi_lingual_support": false,
        "security_compliance": true
    }'

# 