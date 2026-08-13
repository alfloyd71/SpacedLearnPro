from django.urls import path
from flashcards.views import (editFlashcards, showFlashcards, fetchCard,)

urlpatterns=[
     path('', showFlashcards, name='showFlashcards'),
    path('card/', fetchCard),
    path('editflashcards/', editFlashcards,name='editFlashcards'),
    ]
