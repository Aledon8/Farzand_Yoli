from django.contrib import admin

# Register your models here.

from .models import Kindergarten, School, University, TrainingCenter, Event, Post, Comment

@admin.register(Kindergarten)
class KindergartenAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone_number', 'email')
    search_fields = ('name', 'address')
   

@admin.register(School)
class SchoolAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone_number', 'email', 'number_of_students')
    search_fields = ('name', 'address')
    

@admin.register(University)
class UniversityAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone_number', 'email', 'number_of_faculties')
    search_fields = ('name', 'address')
    

@admin.register(TrainingCenter)
class TrainingCenterAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'phone_number', 'email', 'number_of_employees')
    search_fields = ('name', 'address',)
   

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_datetime', 'end_datetime', 'location', 'created_at', 'updated_at')
    search_fields = ('title', 'location')
    list_filter = ('start_datetime', 'end_datetime', 'created_at')
    
    def get_queryset(self, request):
        """Optimize query to prefetch related organizers."""
        queryset = super().get_queryset(request)
        return queryset.select_related('kindergarten', 'school', 'university', 'training_center')

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'updated_at')
    search_fields = ('title', 'content')
    list_filter = ('created_at', 'updated_at')

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'author', 'post', 'created_at', 'updated_at')
    search_fields = ('content',)
    list_filter = ('created_at', 'updated_at')
