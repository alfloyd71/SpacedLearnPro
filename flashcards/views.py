from django.shortcuts import render
from flashcards.forms import FlashcardsForm

from django.http import HttpResponseRedirect

def renderSiteWebManifest(request):
    context={}
    return render(request, 'flashcards/site.webmanifest', context, content_type="application/json")

def editFlashcards(request):
    question=""
    answer=""
    box=1
   
    submitted=False
    if request.method == 'POST':
      if('question' in request.POST):
        question=request.POST['question']
       
        form = FlashcardsForm(request.POST)#, request.FILES

        print("request.POST ",request.POST)
        if form.is_valid():

            return HttpResponseRedirect('?submitted=True&question=%s' % question)
    else:
        form = FlashcardsForm()
        if 'submitted' in request.GET:
            submitted = True
   
        if 'question' in request.GET:
            question=request.GET['question']
    form=FlashcardsForm()
    context={'form':form, }

    return render(request, 'flashcards/editflashcards.html', context)

def fetchCard(request):
    return render(request, "flashcards/card.html")

def showFlashcards(request):
    form=FlashcardsForm()
    context={'form':form, }
    return render(request, "flashcards/index.html",)

def getBox(request):
    template_name = "flashcards/box.html"

    return render(request, template_name)
    
    

