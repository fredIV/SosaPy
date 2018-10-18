from django.shortcuts import render

# Create your views here.


def login(request):
    """View function for login page."""

    # Render the login page
    return render(request, 'login.html')

def mobile(request):
    """View function for mobile page"""

    # Render the mobile page
    return render(request, 'mobile.html')
