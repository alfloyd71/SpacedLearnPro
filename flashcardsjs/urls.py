from django.urls import path
from flashcardsjs.views import (editFlashcards, showFlashcards, fetchCard,)

urlpatterns=[
     path('', showFlashcards, name='showFlashcards'),
    path('card/', fetchCard),
    path('editflashcards/', editFlashcards,name='editFlashcards'),
    ]
