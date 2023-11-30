from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import (
    CommonInformationSerializer,
    MeyoriyHujjatlarSerializer,
    RahbariyatSerializer,
    SsbBuyruqSerializer,
    TuzulmaSerializer,
    KategoriyaHamkorSerializer,
    HamkorlarSerializer,
    YangilikSerializer,
    AdabiyotSerializer,
)
from .models import (
    CommonInformation,
    MeyoriyHujjatlar,
    Rahbariyat,
    SsbBuyruq,
    Tuzilma,
    KategoriyaHamkor,
    Hamkorlar,
    Yangilik,
    Adabiyot,
)
from .pagination import DoubleShort
from rest_framework.response import Response


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


class TuzulmaView(ListAPIView):
    serializer_class = TuzulmaSerializer
    queryset = Tuzilma.objects.all()


class KategoriyaHamkorView(ListAPIView):
    serializer_class = KategoriyaHamkorSerializer
    queryset = KategoriyaHamkor.objects.all()


class HamkorlarView(ListAPIView):
    serializer_class = HamkorlarSerializer

    def get_queryset(self):
        lang = self.request.headers["Accept-Language"]
        queryset = Hamkorlar.objects.filter(
            translations__category=self.kwargs["pk"], translations__language_code=lang
        )
        return queryset


class YangilikView(ListAPIView):
    serializer_class = YangilikSerializer
    queryset = Yangilik.objects.all().order_by("-translations__created_at")[:6]


class YangilikDetailView(RetrieveAPIView):
    serializer_class = YangilikSerializer
    queryset = Yangilik.objects.all()


class AdabiyotView(ListAPIView):
    serializer_class = AdabiyotSerializer
    queryset = Adabiyot.objects.all()
