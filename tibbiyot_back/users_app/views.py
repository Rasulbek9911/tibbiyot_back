from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"status": "success", "message": "User created successfully"},
                status=201,
            )
        else:
            return Response(
                {"status": "failure", "errors": serializer.errors}, status=400
            )
