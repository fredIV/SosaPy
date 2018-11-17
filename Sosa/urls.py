from django.urls import path
from Sosa import views


urlpatterns = [
    # Uncomment following line for deployment
    path('', views.login, name='login'),
    path('admin_home/', views.admin_home, name='admin_home'),
    path('boards/create/', views.create_board, name='create_board'),
    path('view_results/', views.view_results, name='view_results'),
    path('boards/', views.board_list, name='boards'),
    path('stimsets/', views.stim_sets, name='stimsets'),
    path('stimsets/create', views.create_stimulus, name='create_stimulus'),
    path('experiment', views.create_experiment, name='create_experiment')
]
