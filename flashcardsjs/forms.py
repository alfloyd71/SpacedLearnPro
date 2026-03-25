from django import forms 

class FlashcardsForm(forms.Form):
    question=forms.CharField(required=True, max_length=2000, 
    label='Question',
    widget=forms.Textarea(attrs={'rows':4,'cols':50,'id':'card-question','placeholder': 'Flashcards question'}))

    answer=forms.CharField(required=True, max_length=2000, 
    label='Answer',
    widget=forms.Textarea(attrs={'rows':4,'cols':50,'id':'card-answer','placeholder': 'Flashcards answer'}))
    