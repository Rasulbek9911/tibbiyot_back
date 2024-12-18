# Generated by Django 4.2.7 on 2023-11-22 06:29

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion
import parler.fields
import parler.models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CommonInformation",
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
                "verbose_name": "Common Information",
                "verbose_name_plural": "Common Informations",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
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
                "verbose_name": "Hamkor",
                "verbose_name_plural": "Hamkorlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="KategoriyaHamkor",
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
                "verbose_name": "Kategoriya hamkor",
                "verbose_name_plural": " Kategoriya hamkorlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="MeyoriyHujjatlar",
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
                "verbose_name": "Meyoriy hujjat",
                "verbose_name_plural": "Meyoriy hujjatlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="Rahbariyat",
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
                "verbose_name": "Rahbariyat",
                "verbose_name_plural": " Rahbariyatlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="SsbBuyruq",
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
                "verbose_name": "Ssb buyruq",
                "verbose_name_plural": "Ssb buyruqlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="Tuzilma",
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
                "verbose_name": "Tuzulma",
                "verbose_name_plural": "Tuzulmalar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="TuzilmaTranslation",
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
                    "image",
                    models.ImageField(upload_to="tuzilma/", verbose_name="image"),
                ),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.tuzilma",
                    ),
                ),
            ],
            options={
                "verbose_name": "Tuzulma Translation",
                "db_table": "home_app_tuzilma_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="SsbBuyruqTranslation",
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
                    "file",
                    models.FileField(
                        blank=True,
                        null=True,
                        upload_to="ssb_buyruq/",
                        verbose_name="file",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.ssbbuyruq",
                    ),
                ),
            ],
            options={
                "verbose_name": "Ssb buyruq Translation",
                "db_table": "home_app_ssbbuyruq_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="RahbariyatTranslation",
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
                ("ism", models.CharField(max_length=50, verbose_name="ism")),
                ("familya", models.CharField(max_length=50, verbose_name="familya")),
                ("sharf", models.CharField(max_length=50, verbose_name="sharf")),
                (
                    "rasm",
                    models.ImageField(upload_to="RahbariyatRasm/", verbose_name="rasm"),
                ),
                (
                    "umumiy",
                    ckeditor_uploader.fields.RichTextUploadingField(
                        verbose_name="umumiy malumot"
                    ),
                ),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.rahbariyat",
                    ),
                ),
            ],
            options={
                "verbose_name": "Rahbariyat Translation",
                "db_table": "home_app_rahbariyat_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="MeyoriyHujjatlarTranslation",
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
                    "description",
                    models.CharField(
                        blank=True,
                        max_length=256,
                        null=True,
                        verbose_name="description",
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        blank=True,
                        null=True,
                        upload_to="MeyoriyHujjatlar/images/",
                        verbose_name="image",
                    ),
                ),
                (
                    "file",
                    models.FileField(
                        blank=True,
                        null=True,
                        upload_to="MeyoriyHujjatlar/files/",
                        verbose_name="file",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now=True)),
                ("updated_at", models.DateTimeField(auto_now_add=True)),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.meyoriyhujjatlar",
                    ),
                ),
            ],
            options={
                "verbose_name": "Meyoriy hujjat Translation",
                "db_table": "home_app_meyoriyhujjatlar_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="KategoriyaHamkorTranslation",
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
                ("name", models.CharField(max_length=100, verbose_name="name")),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.kategoriyahamkor",
                    ),
                ),
            ],
            options={
                "verbose_name": "Kategoriya hamkor Translation",
                "db_table": "home_app_kategoriyahamkor_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
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
                    "category",
                    models.ForeignKey(
                        default=None,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="home_app.kategoriyahamkor",
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
                "verbose_name": "Hamkor Translation",
                "db_table": "home_app_hamkorlar_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name="CommonInformationTranslation",
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
                    "title",
                    models.CharField(
                        blank=True, max_length=256, null=True, verbose_name="title"
                    ),
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
                        to="home_app.commoninformation",
                    ),
                ),
            ],
            options={
                "verbose_name": "Common Information Translation",
                "db_table": "home_app_commoninformation_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
