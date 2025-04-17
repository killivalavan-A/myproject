from django.urls import path
from . import views

urlpatterns = [
    path('simple/', views.simple_view, name='simple_view'),
    path('contact/', views.contact, name='contact'),
    path('contact/success/', views.success_page, name='success_page'),

]