from .serializers import YunalishSerializer, FanSerializer, MavzuSerializer,FanDetailSerializer
from rest_framework.generics import ListAPIView,RetrieveAPIView
from .models import Yunalish, Fan, Mavzu
from home_app.pagination import CustomPagination
from rest_framework import filters


class YunalishView(ListAPIView):
    serializer_class = YunalishSerializer
    queryset = Yunalish.objects.all()


class FanView(ListAPIView):
    serializer_class = FanSerializer
    queryset = Fan.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'yunalish__name']
    pagination_class = CustomPagination


class MavzuView(ListAPIView):
    serializer_class = MavzuSerializer
    queryset = Mavzu.objects.all()

class FanDetailView(RetrieveAPIView):
    serializer_class = FanDetailSerializer
    queryset = Fan.objects.all()