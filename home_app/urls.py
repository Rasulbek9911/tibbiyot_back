from django.urls import path
from .views import CommonInformationView
urlpatterns = [
    path('common_information',CommonInformationView.as_view() )
]