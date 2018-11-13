from django.urls import path
from Sosa import views


urlpatterns = [
    # Uncomment following line for deployment
    # path('', views.login, name='login'),
    path('', views.admin_home, name='admin_home'),
    path('boards/create_board/', views.create_board, name='create_board'),
    path('mobile/', views.mobile, name='mobile'),
    path('view_results/', views.view_results, name='view_results'),
    path('boards/', views.board_list, name='boards'),
    path('stimsets/', views.stim_sets, name='stimsets'),
]
