from .serializers import YunalishSerializer,FanSerializer
from rest_framework.generics import ListAPIView
from .models import Yunalish,Fan,Mavzu

class YunalishView(ListAPIView):
    serializer_class = YunalishSerializer
    queryset = Yunalish.objects.all()

class FanView(ListAPIView):
    serializer_class = FanSerializer
    queryset = Fan.objects.all()