from django.contrib import admin
from .models import CommonInformation, MeyoriyHujjatlar,SsbBuyruq,Rahbariyat,Hamkorlar
from parler.admin import TranslatableAdmin

admin.site.register(CommonInformation, TranslatableAdmin)
admin.site.register(MeyoriyHujjatlar, TranslatableAdmin)
admin.site.register(SsbBuyruq, TranslatableAdmin)
admin.site.register(Rahbariyat, TranslatableAdmin)
admin.site.register(Hamkorlar, TranslatableAdmin)
