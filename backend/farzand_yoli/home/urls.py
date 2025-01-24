from django.urls import path
from . import views

urlpatterns = [
    # Kindergarten URLs
    path('kindergartens/', views.KindergartenListView.as_view(), name='kindergarten-list'),
    path('kindergarten/<int:pk>/', views.KindergartenDetailView.as_view(), name='kindergarten-detail'),

    # School URLs
    path('schools/', views.SchoolListView.as_view(), name='school-list'),
    path('school/<int:pk>/', views.SchoolDetailView.as_view(), name='school-detail'),

    # University URLs
    path('universities/', views.UniversityListView.as_view(), name='university-list'),
    path('university/<int:pk>/', views.UniversityDetailView.as_view(), name='university-detail'),

    # Training Center URLs
    path('training-centers/', views.TrainingCenterListView.as_view(), name='training-center-list'),
    path('training-center/<int:pk>/', views.TrainingCenterDetailView.as_view(), name='training-center-detail'),
    
    # Event URLs
    path('events/', views.EventListView.as_view(), name='event-list'), 
    path('events/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'), 
]
