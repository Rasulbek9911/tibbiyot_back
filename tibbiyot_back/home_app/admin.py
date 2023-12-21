from django.contrib import admin
from .models import (
    CommonInformation,
    MeyoriyHujjatlar,
    SsbBuyruq,
    Rahbariyat,
    Hamkorlar,
    KategoriyaHamkor,
    Yangilik,
    Adabiyot,
    Bolim,
    FoydaliMalumot,
    YaratiladiganAdabiyot,
    VideoContent
)
from parler.admin import TranslatableAdmin

admin.site.register(CommonInformation, TranslatableAdmin)
admin.site.register(MeyoriyHujjatlar, TranslatableAdmin)
admin.site.register(SsbBuyruq, TranslatableAdmin)
admin.site.register(Rahbariyat, TranslatableAdmin)
admin.site.register(KategoriyaHamkor, TranslatableAdmin)
admin.site.register(Hamkorlar, TranslatableAdmin)
admin.site.register(Yangilik, TranslatableAdmin)
admin.site.register(Adabiyot, TranslatableAdmin)
admin.site.register(Bolim, TranslatableAdmin)
admin.site.register(YaratiladiganAdabiyot, TranslatableAdmin)
admin.site.register(VideoContent, TranslatableAdmin)
admin.site.register(FoydaliMalumot, TranslatableAdmin)
