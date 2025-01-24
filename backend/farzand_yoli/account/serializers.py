from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile



# Сериализатор для модели User (пользователя)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']  # Поля пользователя

# Сериализатор для модели Profile
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Вложенный сериализатор для пользователя (readonly)

    class Meta:
        model = Profile
        fields = ['id', 'user', 'city', 'phone_number', 'firsname', 'lastname', 'avatar']  # Все поля профиля

    def update(self, instance, validated_data):
        # Для обновления профиля пользователя без изменения связанных данных пользователя
        instance.city = validated_data.get('city', instance.city)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.firsname = validated_data.get('firsname', instance.firsname)
        instance.lastname = validated_data.get('lastname', instance.lastname)
        instance.avatar = validated_data.get('avatar', instance.avatar)
        
        instance.save()
        return instance

    def create(self, validated_data):
        # Если профиля еще нет, создаем его
        return Profile.objects.create(**validated_data)
