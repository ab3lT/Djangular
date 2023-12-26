from django.urls import include, path

from .api import ListApi, CardApi

urlpatterns = [
    path('', ListApi.as_view()),
    path('lists', ListApi.as_view()),
    path('cards', CardApi.as_view())
]
