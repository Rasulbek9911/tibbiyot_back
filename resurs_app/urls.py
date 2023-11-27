from django.urls import path
from .views import YunalishView, FanView,MavzuView

urlpatterns = [
    path("yunalish", YunalishView.as_view()),
    path("fan", FanView.as_view()),
    path("mavzu", MavzuView.as_view()),
]
