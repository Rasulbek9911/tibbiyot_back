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
    BolimSerializer,
    YaratiladiganAdabiyotSerializer,
    FoydaliMalumotSerializer,
    VideoContentSerializer,
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
    Bolim,
    YaratiladiganAdabiyot,
    FoydaliMalumot,
    VideoContent,
)
from .pagination import DoubleShort, ExtraShort, Middle, PageSix
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


class YangilikHomeView(ListAPIView):
    serializer_class = YangilikSerializer
    queryset = Yangilik.objects.all().order_by("-translations__created_at")[:6]


class YangilikView(ListAPIView):
    serializer_class = YangilikSerializer
    queryset = Yangilik.objects.all()
    pagination_class = Middle


class YangilikDetailView(RetrieveAPIView):
    serializer_class = YangilikSerializer
    queryset = Yangilik.objects.all()


class AdabiyotView(ListAPIView):
    serializer_class = AdabiyotSerializer
    queryset = Adabiyot.objects.all()
    pagination_class = ExtraShort


class BolimView(ListAPIView):
    serializer_class = BolimSerializer
    queryset = Bolim.objects.all()


class YaratiladiganAdabiyotView(ListAPIView):
    serializer_class = YaratiladiganAdabiyotSerializer
    queryset = YaratiladiganAdabiyot.objects.all()


class VideoContentHomeView(ListAPIView):
    serializer_class = VideoContentSerializer
    queryset = VideoContent.objects.all()[:4]


class VideoContentAllView(ListAPIView):
    serializer_class = VideoContentSerializer
    queryset = VideoContent.objects.all()
    pagination_class = PageSix


class FoydaliMalumotView(ListAPIView):
    serializer_class = FoydaliMalumotSerializer
    queryset = FoydaliMalumot.objects.all().order_by("?")[:1]


class FoydaliMalumotRetriveView(RetrieveAPIView):
    serializer_class = FoydaliMalumotSerializer
    queryset = FoydaliMalumot.objects.all()
