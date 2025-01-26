from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.RegisterAPIView.as_view(), name='api_register'),
    path('api/login/', views.LoginAPIView.as_view(), name='api_login'),
    path('api/update-profile/', views.UpdateUserAPIView.as_view(), name='api_update_profile'),
]


