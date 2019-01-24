from django.db import models

# Create your models here.
class Todo(models.Model):
    content = models.TextField()
    completed = models.BooleanField()

    def __str__(self):
        return self.content