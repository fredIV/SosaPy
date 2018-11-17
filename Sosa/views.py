from django.shortcuts import render

# Create your views here.


def login(request):
    """View function for login page."""

    # Render the login page
    return render(request, 'login.html')


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


def board_list(request):
    """View function for the board list page"""

    # Render the board list page
    return render(request, 'board_list.html')


def stim_sets(request):
    """View function for the stim sets page"""

    # Render the board list page
    return render(request, 'stim_sets.html')


def create_stimulus(request):
    """View function for the stimulus creation page"""

    # Render the stimulus creation page
    return render(request, 'create_stimulus.html')


def create_experiment(request):
    """View function for the experiment creation page"""

    # Render the stimulus creation page
    return render(request, 'create_experiment.html')