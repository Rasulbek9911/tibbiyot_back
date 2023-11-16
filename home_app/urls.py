from django.urls import path
from .views import CommonInformationView,MeyoriyHujjatlarSerializerView
urlpatterns = [
    path('common_information',CommonInformationView.as_view()),
    path('meyoriy_hujjat',MeyoriyHujjatlarSerializerView.as_view()),
]