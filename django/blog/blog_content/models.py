from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField('Blog Title', max_length=200)
    author = models.CharField('Blog Author', max_length=80, null=True)
    author_pic = models.ImageField('Blog Author', upload_to='author_imgs', null=True)
    image = models.ImageField('Blog Image', upload_to='blog_imgs', null=True)
    slug = models.SlugField('Url Title', unique=True)
    intro = models.TextField("Introduction")
    body = models.TextField()
    created_at = models.DateTimeField('Date Published', auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']