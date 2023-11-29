from django.urls import path
from .views import (
    CommonInformationView,
    MeyoriyHujjatlarView,
    RahbariyatView,
    SsbBuyruqView,
    TuzulmaView,
    KategoriyaHamkorView,
    HamkorlarView,
    YangilikView,
    YangilikDetailView,
    AdabiyotView,
)

urlpatterns = [
    path("common_information", CommonInformationView.as_view()),
    path("meyoriy_hujjat", MeyoriyHujjatlarView.as_view()),
    path("rahbariyat", RahbariyatView.as_view()),
    path("ssb_buyruq", SsbBuyruqView.as_view()),
    path("tuzulma", TuzulmaView.as_view()),
    path("kategoriya_hamkor", KategoriyaHamkorView.as_view()),
    path("hamkorlar/<int:pk>/", HamkorlarView.as_view()),
    path("yangilik", YangilikView.as_view()),
    path("yangilik/<int:pk>/", YangilikDetailView.as_view()),
    path("adabiyot", AdabiyotView.as_view()),
]
