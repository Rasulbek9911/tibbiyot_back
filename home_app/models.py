from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.translation import gettext_lazy as _
from parler.models import TranslatableModel, TranslatedFields


class CommonInformation(TranslatableModel):
    translations = TranslatedFields(
        title=models.CharField(_("title"), max_length=256, null=True, blank=True),
        description=RichTextUploadingField(_("description")),
    )

    class Meta:
        verbose_name = _("Common Information")
        verbose_name_plural = _("Common Informations")


class MeyoriyHujjatlar(TranslatableModel):
    translations = TranslatedFields(
        title=models.CharField(_("title"), max_length=256),
        description=models.CharField(
            _("description"), max_length=256, null=True, blank=True
        ),
        image=models.ImageField(
            _("image"), upload_to="MeyoriyHujjatlar/images/", null=True, blank=True
        ),
        file=models.FileField(
            _("file"), upload_to="MeyoriyHujjatlar/files/", null=True, blank=True
        ),
        created_at=models.DateTimeField(auto_now=True),
        updated_at=models.DateTimeField(auto_now_add=True),
    )

    def __str__(self) -> str:
        return self.title


class SsbBuyruq(TranslatableModel):
    translations = TranslatedFields(
        title=models.CharField(_("title"), max_length=256),
        file=models.FileField(
            _("file"), upload_to="ssb_buyruq/", null=True, blank=True
        ),
        created_at=models.DateTimeField(auto_now=True),
        updated_at=models.DateTimeField(auto_now_add=True),
    )

    def __str__(self) -> str:
        return self.title


class Rahbariyat(TranslatableModel):
    translations = TranslatedFields(
        ism=models.CharField(_("ism"), max_length=50),
        familya=models.CharField(_("familya"), max_length=50),
        sharf=models.CharField(_("sharf"), max_length=50),
        rasm=models.ImageField(_("rasm"), upload_to="RahbariyatRasm/"),
        umumiy=RichTextUploadingField(_("umumiy ma'lumot")),
    )

    def __str__(self):
        return f"{self.ism} {self.familya}"


class Hamkorlar(TranslatableModel):
    translations = TranslatedFields(
        name=models.CharField(_("nomi"), max_length=100),
        faoliyat=RichTextUploadingField(_("faoliyat")),
        rasm=models.ImageField(_("rasm"), upload_to="hamkors/", null=True, blank=True),
    )

    def __str__(self):
        return self.name
