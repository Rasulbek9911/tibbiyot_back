from rest_framework import serializers
from .models import CommonInformation,MeyoriyHujjatlar
from parler_rest.serializers import TranslatableModelSerializer
from parler_rest.fields import TranslatedFieldsField
from django.conf import settings


class CommonInformationSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=CommonInformation)

    def to_representation(self, instance):
        inst_rep = super().to_representation(instance)
        request = self.context.get('request')
        lang_code = request.META.get('HTTP_ACCEPT_LANGUAGE', None)
        # only use the first two chars for language code
        if lang_code and '-' in lang_code:
            lang_code = lang_code.split('-')[0]
        result = {}
        for field_name, field in self.get_fields().items():
            # add normal field to resulting representation
            if field_name != 'translations':
                field_value = inst_rep.pop(field_name)
                result.update({field_name: field_value})

            if field_name == 'translations':
                translations = inst_rep.pop(field_name)
                if lang_code not in translations:
                    # use fallback setting in PARLER_LANGUAGES
                    parler_default_settings = settings.PARLER_LANGUAGES['default']
                    if 'fallback' in parler_default_settings:
                        lang_code = parler_default_settings.get('fallback')

                    if 'fallbacks' in parler_default_settings:
                        lang_code = parler_default_settings.get('fallbacks')[0]

                for lang, translation_fields in translations.items():
                    if lang == lang_code:
                        trans_rep = translation_fields.copy()  # make copy to use pop() from
                        for trans_field_name, trans_field in translation_fields.items():
                            field_value = trans_rep.pop(trans_field_name)
                            result.update({trans_field_name: field_value})

        return result

    class Meta:
        model = CommonInformation
        fields = '__all__'


class MeyoriyHujjatlarSerializer(TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=MeyoriyHujjatlar)
    def to_representation(self, instance):
        inst_rep = super().to_representation(instance)
        request = self.context.get('request')
        lang_code = request.META.get('HTTP_ACCEPT_LANGUAGE', None)
        # only use the first two chars for language code
        if lang_code and '-' in lang_code:
            lang_code = lang_code.split('-')[0]

        result = {}
        for field_name, field in self.get_fields().items():
            # add normal field to resulting representation
            if field_name != 'translations':
                field_value = inst_rep.pop(field_name)
                result.update({field_name: field_value})

            if field_name == 'translations':
                translations = inst_rep.pop(field_name)
                if lang_code not in translations:
                    # use fallback setting in PARLER_LANGUAGES
                    parler_default_settings = settings.PARLER_LANGUAGES['default']
                    if 'fallback' in parler_default_settings:
                        lang_code = parler_default_settings.get('fallback')

                    if 'fallbacks' in parler_default_settings:
                        lang_code = parler_default_settings.get('fallbacks')[0]

                for lang, translation_fields in translations.items():
                    if lang == lang_code:
                        trans_rep = translation_fields.copy()  # make copy to use pop() from
                        for trans_field_name, trans_field in translation_fields.items():
                            field_value = trans_rep.pop(trans_field_name)
                            result.update({trans_field_name: field_value})

        return result


    class Meta:
         model = MeyoriyHujjatlar
         fields = '__all__'
