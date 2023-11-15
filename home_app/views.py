from rest_framework.generics import ListAPIView
from .serializers import CommonInformationSerializer
from .models import CommonInformation


class CommonInformationView(ListAPIView):
    serializer_class = CommonInformationSerializer
    queryset = CommonInformation.objects.translated('ru')
