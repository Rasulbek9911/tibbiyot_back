from rest_framework.generics import ListAPIView
from .serializers import (
    CommonInformationSerializer,
    MeyoriyHujjatlarSerializer,
    RahbariyatSerializer,
    SsbBuyruqSerializer,
)
from .models import CommonInformation, MeyoriyHujjatlar, Rahbariyat, SsbBuyruq
from .pagination import DoubleShort


class CommonInformationView(ListAPIView):
    serializer_class = CommonInformationSerializer
    queryset = CommonInformation.objects.all()


class MeyoriyHujjatlarView(ListAPIView):
    serializer_class = MeyoriyHujjatlarSerializer
    pagination_class = DoubleShort
    queryset = MeyoriyHujjatlar.objects.all()


class RahbariyatView(ListAPIView):
    serializer_class = RahbariyatSerializer
    queryset = Rahbariyat.objects.all()


class SsbBuyruqView(ListAPIView):
    serializer_class = SsbBuyruqSerializer
    pagination_class = DoubleShort
    queryset = SsbBuyruq.objects.all()
