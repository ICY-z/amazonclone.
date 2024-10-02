# Create your views here.
from django.shortcuts import render
from django.views.generic import ListView , DetailView
from .models import Blog


class BlogListView(ListView):
    model = Blog
    template_name = "home.html"

class BlogDetailView(DetailView): # new
 model = Blog
 template_name = "blog_detail.html"


# def HomeView(request):
#     Blog_list = Blog.objects.all()
#     context = {
#        'Blog': Blog_list
#     }

#     return render(request, 'blog/index.html' , context )

# def dataView(request):
#    blog = Blog.objects.get()
#    return render(request,'blog/details.html',{
#       'blog':blog
#    })

