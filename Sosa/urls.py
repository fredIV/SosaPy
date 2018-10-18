from django.urls import path
from Sosa import views


urlpatterns = [
    path('', views.login, name='login'),
    path('mobile/', views.mobile, name='mobile'),
]