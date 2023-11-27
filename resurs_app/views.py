from .serializers import YunalishSerializer, FanSerializer,MavzuSerializer
from rest_framework.generics import ListAPIView
from .models import Yunalish, Fan, Mavzu


class YunalishView(ListAPIView):
    serializer_class = YunalishSerializer
    queryset = Yunalish.objects.all()


class FanView(ListAPIView):
    serializer_class = FanSerializer
    queryset = Fan.objects.all()


class MavzuView(ListAPIView):
    serializer_class = MavzuSerializer
    queryset = Mavzu.objects.all()