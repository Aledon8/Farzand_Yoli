from rest_framework import serializers
from .models import Kindergarten, School, University, TrainingCenter
from django.contrib.auth import get_user_model
from .models import Event

# Serializer for Kindergarten
class KindergartenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kindergarten
        fields = '__all__' 
        
# Serializer for School
class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__' 

# Serializer for University
class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = '__all__' 

# Serializer for Training Center
class TrainingCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingCenter
        fields = '__all__'  

class EventSerializer(serializers.ModelSerializer):
    # Get organizer as a dictionary with type and name
    organizer = serializers.SerializerMethodField()
    
    # Event participants — many-to-many relationship with users
    participants = serializers.PrimaryKeyRelatedField(queryset=get_user_model().objects.all(), many=True, required=False)

    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_datetime', 'end_datetime', 'location', 'organizer', 'participants', 'created_at', 'updated_at']

    def get_organizer(self, obj):
        """Return organizer as a dictionary with its type and name."""
        if obj.kindergarten:
            return {"type": "Kindergarten", "name": obj.kindergarten.name}
        elif obj.school:
            return {"type": "School", "name": obj.school.name}
        elif obj.university:
            return {"type": "University", "name": obj.university.name}
        elif obj.training_center:
            return {"type": "Training Center", "name": obj.training_center.name}
        return None