# Generated by Django 4.2.7 on 2023-11-17 10:46

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion
import parler.fields
import parler.models


class Migration(migrations.Migration):
    dependencies = [
        ("home_app", "0003_rahbariyattranslation_familya_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Hamkorlar",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="HamkorlarTranslation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "language_code",
                    models.CharField(
                        db_index=True, max_length=15, verbose_name="Language"
                    ),
                ),
                ("name", models.CharField(max_length=100, verbose_name="nomi")),
                (
                    "faoliyat",
                    ckeditor_uploader.fields.RichTextUploadingField(
                        verbose_name="faoliyat"
                    ),
                ),
                (
                    "rasm",
                    models.ImageField(
                        blank=True, null=True, upload_to="hamkors/", verbose_name="rasm"
                    ),
                ),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.hamkorlar",
                    ),
                ),
            ],
            options={
                "verbose_name": "hamkorlar Translation",
                "db_table": "home_app_hamkorlar_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
