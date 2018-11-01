from django.urls import path
from Sosa import views


urlpatterns = [
    # Uncomment following line for deployment
    # path('', views.login, name='login'),
    path('', views.admin_home, name='admin_home'),
    path('create_board/', views.create_board, name='create_board'),
    path('mobile/', views.mobile, name='mobile'),
]
