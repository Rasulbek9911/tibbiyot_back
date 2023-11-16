from rest_framework.generics import ListAPIView
from .serializers import CommonInformationSerializer, MeyoriyHujjatlarSerializer
from .models import CommonInformation, MeyoriyHujjatlar
from .pagination import CustomPagination



class CommonInformationView(ListAPIView):
    serializer_class = CommonInformationSerializer
    queryset = CommonInformation.objects.all()


class MeyoriyHujjatlarSerializerView(ListAPIView):
    serializer_class = MeyoriyHujjatlarSerializer
    pagination_class = CustomPagination
    queryset = MeyoriyHujjatlar.objects.all()
