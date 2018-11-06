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


def admin_home(request):
    """View function for admin home page"""

    # Render the admin home page
    return render(request, 'admin_home.html')


def create_board(request):
    """View function for create board page"""

    # Render the create board page
    return render(request, 'create_board.html')


def view_results(request):
    """View function for view results page"""

    # Render the create board page
    return render(request, 'view_results.html')
