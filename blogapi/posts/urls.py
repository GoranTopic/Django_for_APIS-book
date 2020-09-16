from django.contrib import admin
from django.urls import path, include
from .views import PostDetail, PostList, UserList, UserDetail

urlpatterns = [
        path('', PostList.as_view()),
        path('<int:pk>/', PostDetail.as_view()),
        path('users/', UserList.as_view()),
        path('users/<int:pk>', UserDetail.as_view()),
        ]
