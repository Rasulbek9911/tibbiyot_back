from django.urls import path
from .views import (
    CommonInformationView,
    MeyoriyHujjatlarView,
    RahbariyatView,
    SsbBuyruqView,
    TuzulmaView,
    KategoriyaHamkorView,
    HamkorlarView,    

)

urlpatterns = [
    path("common_information", CommonInformationView.as_view()),
    path("meyoriy_hujjat", MeyoriyHujjatlarView.as_view()),
    path("rahbariyat", RahbariyatView.as_view()),
    path("ssb_buyruq", SsbBuyruqView.as_view()),
    path("tuzulma", TuzulmaView.as_view()),
    path("kategoriya_hamkor", KategoriyaHamkorView.as_view()),
    path("hamkorlar/<int:pk>/", HamkorlarView.as_view()),
]
