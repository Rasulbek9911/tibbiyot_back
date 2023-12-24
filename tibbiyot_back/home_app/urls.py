from django.urls import path
from .views import (
    CommonInformationView,
    MeyoriyHujjatlarView,
    RahbariyatView,
    SsbBuyruqView,
    TuzulmaView,
    KategoriyaHamkorView,
    HamkorlarView,
    YangilikHomeView,
    YangilikDetailView,
    AdabiyotView,
    YangilikView,
    BolimView,
    VideoContentAllView,
    VideoContentHomeView,
    FoydaliMalumotView,
    YaratiladiganAdabiyotView,
    FoydaliMalumotRetriveView
)

urlpatterns = [
    path("common_information", CommonInformationView.as_view()),
    path("meyoriy_hujjat", MeyoriyHujjatlarView.as_view()),
    path("rahbariyat", RahbariyatView.as_view()),
    path("ssb_buyruq", SsbBuyruqView.as_view()),
    path("tuzulma", TuzulmaView.as_view()),
    path("kategoriya_hamkor", KategoriyaHamkorView.as_view()),
    path("hamkorlar/<int:pk>/", HamkorlarView.as_view()),
    path("yangilik", YangilikHomeView.as_view()),
    path("yangilik_all", YangilikView.as_view()),
    path("yangilik/<int:pk>/", YangilikDetailView.as_view()),
    path("adabiyot", AdabiyotView.as_view()),
    path("bolim", BolimView.as_view()),
    path("video_home", VideoContentHomeView.as_view()),
    path("video_all", VideoContentAllView.as_view()),
    path("yaratiladigan_adabiyot", YaratiladiganAdabiyotView.as_view()),
    path("foydali_malumot", FoydaliMalumotView.as_view()),
    path("foydali_malumot/<int:pk>/", FoydaliMalumotRetriveView.as_view()),

]
