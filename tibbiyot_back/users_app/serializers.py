from rest_framework.serializers import ModelSerializer, CharField
from rest_framework.exceptions import ValidationError
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password

class UserSerializer(ModelSerializer):
    password2 = CharField(write_only=True, required=True)
    password = CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = CustomUser
        fields = ["id", "username", "password", "password2"]

    def create(self, validated_data):
        if validated_data["password"] != validated_data["password2"]:
            raise ValidationError("passwordlar farqli")
        user = CustomUser.objects.create(username=validated_data["username"])
        user.set_password(validated_data["password"])
        user.save()
        return user
