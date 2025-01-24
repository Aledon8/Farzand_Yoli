from django.db import models
from django.core.exceptions import ValidationError
# Model for Kindergarten
class Kindergarten(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    established_date = models.DateField()
    director = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name 

# Model for School
class School(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    established_date = models.DateField()
    director = models.CharField(max_length=255)
    number_of_students = models.IntegerField()
    
    def __str__(self):
        return self.name 

# Model for University
class University(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    established_date = models.DateField()
    rector = models.CharField(max_length=255)
    number_of_faculties = models.IntegerField()
    
    def __str__(self):
        return self.name 
    
# Model for Training Center
class TrainingCenter(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    established_date = models.DateField()
    director = models.CharField(max_length=255)
    courses_offered = models.TextField()
    number_of_employees = models.IntegerField()
    
    def __str__(self):
        return self.name  

# Model for Event
class Event(models.Model):
    title = models.CharField(max_length=255)  
    description = models.TextField(null=True, blank=True)  
    start_datetime = models.DateTimeField()  
    end_datetime = models.DateTimeField()  
    location = models.CharField(max_length=255, null=True, blank=True)  
    
    # Event organizer (can be one of the educational institution types)
    kindergarten = models.ForeignKey(Kindergarten, on_delete=models.CASCADE, null=True, blank=True, related_name='events')
    school = models.ForeignKey(School, on_delete=models.CASCADE, null=True, blank=True, related_name='events')
    university = models.ForeignKey(University, on_delete=models.CASCADE, null=True, blank=True, related_name='events')
    training_center = models.ForeignKey(TrainingCenter, on_delete=models.CASCADE, null=True, blank=True, related_name='events')
    
    participants = models.ManyToManyField('account.CustomUser', related_name='participating_events', blank=True)  

    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return self.title

    def clean(self):
        """Ensure that only one organizer is specified."""
        organizer_count = sum([bool(self.kindergarten), bool(self.school), bool(self.university), bool(self.training_center)])
        if organizer_count != 1:
            raise ValidationError("The event must have only one organizer (Kindergarten, School, University, or TrainingCenter).")