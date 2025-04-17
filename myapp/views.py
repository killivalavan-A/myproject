from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

# def simple_view(request):
    
#      return render(request, 'simple.html')

def simple_view(request):
    if request.method == 'POST':
        # Form submission (POST request)
        form = ContactForm(request.POST)
        if form.is_valid():
            # Extract data from the form
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # Create a ContactMessage object and save it to the database
            contact_message = ContactMessage(name=name, email=email, subject=subject, message=message)
            contact_message.save()

            return redirect('simple_view')  # Redirect back to the same page
    else:
        # Initial request (GET request)
        form = ContactForm()  # Create an empty form instance
    return render(request, 'simple.html', {'form': form})










from django.shortcuts import render, redirect
from .forms import ContactForm  # Import your form
from .models import ContactMessage # Import your model

def contact(request):
    if request.method == 'POST':
        # Form submission (POST request)
        form = ContactForm(request.POST)
        if form.is_valid():
            # Extract data from the form
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # Create a ContactMessage object and save it to the database
            contact_message = ContactMessage(name=name, email=email, subject=subject, message=message)
            contact_message.save()

            return redirect('success_page')  # Redirect to success page
    else:
        # Initial request (GET request)
        form = ContactForm()  # Create an empty form instance
    return render(request, 'gh.html', {'form': form}) # Render the form in gh.html

def success_page(request):
    return render(request, 'success.html') # Render success.html