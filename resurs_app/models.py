from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.translation import gettext_lazy as _


class Yunalish(models.Model):
    name = models.CharField(_("name"), max_length=256)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _("Yunalish")
        verbose_name_plural = _("Yunalishlar")


class Fan(models.Model):
    name = models.CharField(_("name"), max_length=256)
    yunalish = models.ForeignKey(
        Yunalish, on_delete=models.CASCADE, related_name="fans"
    )
    rasm = models.ImageField(_("rasm"), upload_to="Fan/rasm/")
    # muallif = models.CharField(
    #     _('muallif'), max_length=256, null=True, blank=True)
    created_at = (models.DateTimeField(auto_now=True),)
    updated_at = (models.DateTimeField(auto_now_add=True),)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _("Fan")
        verbose_name_plural = _("Fanlar")


class Mavzu(models.Model):
    name = models.CharField(_("name"), max_length=256)
    fan = models.ForeignKey(Fan, on_delete=models.CASCADE)
    nazariy_malumot = models.FileField(
        _("nazariy malumot"), upload_to="Fan/nazariy_malumot/"
    )
    media = models.URLField()
    taqdimot = models.FileField(_("taqdimot"), upload_to="Fan/taqdimot/")
    topshiriq = models.FileField(_("topshiriq"), upload_to="Fan/topshiriq/")

    created_at = (models.DateTimeField(auto_now=True),)
    updated_at = (models.DateTimeField(auto_now_add=True),)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _("Mavzu")
        verbose_name_plural = _("Mavzular")
