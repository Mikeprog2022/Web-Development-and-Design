from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField('Blog Title', max_length=200)
    slug = models.SlugField('Url Title', unique=True)
    intro = models.TextField("Introduction")
    body = models.TextField()
    created_at = models.DateTimeField('Date Published', auto_now_add=True)

    def __str__(self):
        return self.title

