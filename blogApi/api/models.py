from django.db import models


class Post(models.Model):
    body = models.CharField(max_length=200, blank=False, unique=False)

    def __str__(self):
        return self.body

