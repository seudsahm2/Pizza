from rest_framework import serializers
from .models import Pizzaria
from rest_framework.reverse import reverse

class PizzariaListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()
    class Meta:
        model = Pizzaria
        fields = [
            'id',
            'pizzaria_name',
            'city',
            'zip_code',
            'absolute_url'
        ]
    
    def get_absolute_url(self, obj):
        return reverse('pizzaria_detail', args=(obj.pk,))
        
class PizzariaDetailsSerializer(serializers.ModelSerializer):
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    class Meta:
        model = Pizzaria
        fields = [
            'id',
            'pizzaria_name',
            'street',
            'city',
            'state',
            'zip_code',
            'website',
            'phone_number',
            'description',
            'logo_image',
            'email',
            'active',
            'update',
            'delete',
        ]
    def get_update(self, obj):
        return reverse('pizzaria_update',args=(obj.pk,))
    
    def get_delete(self,obj):
        return reverse('pizzaria_delete',args=(obj.pk,))