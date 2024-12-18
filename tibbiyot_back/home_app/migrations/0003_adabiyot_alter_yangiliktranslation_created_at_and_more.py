# Generated by Django 4.2.7 on 2023-11-29 11:30

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import parler.fields
import parler.models


class Migration(migrations.Migration):
    dependencies = [
        ("home_app", "0002_yangilik_yangiliktranslation"),
    ]

    operations = [
        migrations.CreateModel(
            name="Adabiyot",
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
                "verbose_name": "Adabiyot",
                "verbose_name_plural": "Adabiyotlar",
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.AlterField(
            model_name="yangiliktranslation",
            name="created_at",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.CreateModel(
            name="AdabiyotTranslation",
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
                ("muallif", models.CharField(max_length=256, verbose_name="muallif")),
                ("nashr_yil", models.DateTimeField()),
                (
                    "master",
                    parler.fields.TranslationsForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="translations",
                        to="home_app.adabiyot",
                    ),
                ),
            ],
            options={
                "verbose_name": "Adabiyot Translation",
                "db_table": "home_app_adabiyot_translation",
                "db_tablespace": "",
                "managed": True,
                "default_permissions": (),
                "unique_together": {("language_code", "master")},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
