# Generated by Django 4.2.7 on 2023-12-21 14:27

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import parler.fields
import parler.models


class Migration(migrations.Migration):
    dependencies = [
        ("home_app", "0006_bolim_bolimtranslation"),
    ]

    operations = [
        migrations.CreateModel(
            name="FoydaliMalumot",
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
                "verbose_name": "Foydali_Malumot",
                "verbose_name_plural": "Foydali_Malumotlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="VideoContent",
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
                "verbose_name": "VideoContent",
                "verbose_name_plural": "VideoContentlar",
                "ordering": ["-translations__created_at"],
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="YaratiladiganAdabiyot",
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
                "verbose_name": "YaratiladiganAdabiyot",
                "verbose_name_plural": "YaratiladiganAdabiyotlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.AlterModelOptions(
            name="yangilik",
            options={
                "ordering": ("-translations__created_at",),
                "verbose_name": "Yangilik",
                "verbose_name_plural": "Yangiliklar",
            },
        ),
        migrations.CreateModel(
            name="YaratiladiganAdabiyotTranslation",
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
                (
                    "file",
                    models.FileField(
                        upload_to="yaratiladigan_adabiyot/", verbose_name="file"
                    ),
                ),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.yaratiladiganadabiyot",
                    ),
                ),
            ],
            options={
                "verbose_name": "YaratiladiganAdabiyot Translation",
                "db_table": "home_app_yaratiladiganadabiyot_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="VideoContentTranslation",
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
                ("title", models.CharField(max_length=256, verbose_name="title")),
                (
                    "video_url",
                    models.URLField(max_length=1024, verbose_name="video_url"),
                ),
                ("created_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.videocontent",
                    ),
                ),
            ],
            options={
                "verbose_name": "VideoContent Translation",
                "db_table": "home_app_videocontent_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="FoydaliMalumotTranslation",
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
                ("title", models.CharField(max_length=256, verbose_name="title")),
                (
                    "image",
                    models.ImageField(upload_to="FoydaliM/", verbose_name="image"),
                ),
                (
                    "description",
                    ckeditor_uploader.fields.RichTextUploadingField(
                        verbose_name="description"
                    ),
                ),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.foydalimalumot",
                    ),
                ),
            ],
            options={
                "verbose_name": "Foydali_Malumot Translation",
                "db_table": "home_app_foydalimalumot_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
