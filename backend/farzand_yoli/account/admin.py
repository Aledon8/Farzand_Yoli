from django.contrib import admin

# Register your models here.
from .models import UserProfile
from django.utils.html import format_html

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone_number', 'birth_date', 'get_avatar_preview')
    search_fields = ('user__username', 'phone_number')
    list_filter = ('birth_date',)
    readonly_fields = ('get_avatar_preview',)
    
    def get_avatar_preview(self, obj):
        """Отображение превью аватара в админке."""
        if obj.avatar:
            return format_html('<img src="{}" style="width: 50px; height: 50px; border-radius: 50%;" />', obj.avatar.url)
        return "Нет аватара"
    get_avatar_preview.short_description = "Превью аватара"
