from django.shortcuts import render

from .models import Post
# Create your views here.

def homeView(request):
    posts_list = Post.objects.all()
        #for post in posts_list:
        #print(post.body)

    return render(request, 'index.html', {
        #content
        'posts': posts_list,
        'test' : 'this is testing str'
    })
    