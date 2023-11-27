from django.urls import path
from .views import YunalishView,FanView

urlpatterns = [
    path("yunalish", YunalishView.as_view()),
    path("fan", FanView.as_view()),
]