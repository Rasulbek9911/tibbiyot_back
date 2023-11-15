from django.contrib import admin
from .models import CommonInformation, MeyoriyHujjatlar
from parler.admin import TranslatableAdmin

admin.site.register(CommonInformation, TranslatableAdmin)
admin.site.register(MeyoriyHujjatlar, TranslatableAdmin)
