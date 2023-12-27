from django.urls import include, path
from django.views.generic import TemplateView

from .api import ListApi, CardApi

urlpatterns = [
    path('', ListApi.as_view()),
    path('lists', ListApi.as_view()),
    path('cards', CardApi.as_view()),
    path('home', TemplateView.as_view(template_name="scrumboard/home.html")),
]
