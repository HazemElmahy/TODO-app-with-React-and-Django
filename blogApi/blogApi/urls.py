from django.views.generic.base import RedirectView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', RedirectView.as_view(url='api/posts/')),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
