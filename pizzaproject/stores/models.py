from django.db import models
from django.core.validators import RegexValidator
# Create your models here.
class Pizzaria(models.Model):
    pizzaria_name = models.CharField(max_length=200,blank=False)
    street  = models.CharField(max_length=400, blank=True)
    city = models.CharField(max_length = 200, blank = True)
    state = models.CharField(max_length = 2, null=True, blank=True)
    zip_code = models.IntegerField(blank=True, default = 0)
    website = models.URLField(max_length = 420, blank = True)
    phone_number = models.CharField(
        validators = [RegexValidator(regex=r'^\d{9,10}$', message='Phone number must be 9 to 10 digits.')],
        max_length=10,
        blank = True
    )
    description = models.TextField(blank = True)
    logo_image = models.ImageField(
        upload_to = 'pizzariaImages',
        blank = True,
        default = "pizzariaImages/pizzalogo.png"
    )
    email = models.EmailField(max_length = 245, blank = True)
    active = models.BooleanField(default = True)
    
    def __str__(self):
        return "{},{}".format(self.pizzaria_name,self.city)