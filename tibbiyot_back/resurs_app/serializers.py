from .models import Yunalish, Mavzu, Fan
from rest_framework.serializers import ModelSerializer


class FanSerializerForYunalish(ModelSerializer):
    class Meta:
        model = Fan
        fields = (
            "id",
            "name",
        )


class YunalishSerializer(ModelSerializer):
    fans = FanSerializerForYunalish(many=True)

    class Meta:
        model = Yunalish
        fields = ("id", "name", "fans")


class MavzuSerializer(ModelSerializer):
    class Meta:
        model = Mavzu
        fields = "__all__"


class FanSerializer(ModelSerializer):
    class Meta:
        model = Fan
        fields = (
            "id",
            "name",
            "yunalish",
            "rasm",
        )


class FanDetailSerializer(ModelSerializer):
    mavzus = MavzuSerializer(many=True)

    class Meta:
        model = Fan
        fields = (
            "id",
            "name",
            "yunalish",
            "rasm",
            "mavzus",
        )
