from rest_framework import serializers
from .models import (
    CommonInformation,
    MeyoriyHujjatlar,
    Rahbariyat,
    SsbBuyruq,
    Tuzilma,
    KategoriyaHamkor,
    Hamkorlar,
    Yangilik,
    Adabiyot,
)
from parler_rest.serializers import TranslatableModelSerializer
from parler_rest.fields import TranslatedFieldsField
from django.conf import settings


class BaseTranslatableSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField()

    def to_representation(self, instance):
        inst_rep = super().to_representation(instance)
        request = self.context.get("request")
        lang_code = request.META.get("HTTP_ACCEPT_LANGUAGE", None)

        if lang_code and "-" in lang_code:
            lang_code = lang_code.split("-")[0]

        result = {}

        for field_name, field in self.get_fields().items():
            if field_name != "translations":
                field_value = inst_rep.pop(field_name)
                result.update({field_name: field_value})

            if field_name == "translations":
                translations = inst_rep.pop(field_name)
                if lang_code not in translations:
                    parler_default_settings = settings.PARLER_LANGUAGES["default"]
                    fallback_setting = (
                        parler_default_settings.get("fallback")
                        or parler_default_settings.get("fallbacks", [])[0]
                    )
                    lang_code = fallback_setting

                for lang, translation_fields in translations.items():
                    if lang == lang_code:
                        trans_rep = translation_fields.copy()
                        for trans_field_name, trans_field in translation_fields.items():
                            field_value = trans_rep.pop(trans_field_name)
                            result.update({trans_field_name: field_value})

        return result


class CommonInformationSerializer(BaseTranslatableSerializer):
    class Meta:
        model = CommonInformation
        fields = "__all__"


class MeyoriyHujjatlarSerializer(BaseTranslatableSerializer):
    class Meta:
        model = MeyoriyHujjatlar
        fields = "__all__"


class RahbariyatSerializer(BaseTranslatableSerializer):
    class Meta:
        model = Rahbariyat
        fields = "__all__"


class SsbBuyruqSerializer(BaseTranslatableSerializer):
    class Meta:
        model = SsbBuyruq
        fields = "__all__"


class TuzulmaSerializer(BaseTranslatableSerializer):
    class Meta:
        model = Tuzilma
        fields = ("image",)


class KategoriyaHamkorSerializer(BaseTranslatableSerializer):
    class Meta:
        model = KategoriyaHamkor
        fields = (
            "id",
            "name",
        )


class HamkorlarSerializer(BaseTranslatableSerializer):
    category = KategoriyaHamkorSerializer()

    class Meta:
        model = Hamkorlar
        fields = "__all__"


class YangilikSerializer(BaseTranslatableSerializer):
    class Meta:
        model = Yangilik
        fields = "__all__"


class AdabiyotSerializer(BaseTranslatableSerializer):
    class Meta:
        model = Adabiyot
        fields = "__all__"