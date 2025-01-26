from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('api/register/', csrf_exempt(views.register), name='api_register'),
    path('api/login/', csrf_exempt(views.login), name='api_login'),
    path('api/update-profile/', views.UpdateUserAPIView.as_view(), name='api_update_profile'),
]


