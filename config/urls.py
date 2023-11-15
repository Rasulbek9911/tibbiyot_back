from django.utils.translation import gettext_lazy as _
from django.conf.urls.i18n import i18n_patterns
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = i18n_patterns(
    path(_('admin/'), admin.site.urls),
    path('rosetta/', include('rosetta.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('home_app.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls'))

)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
