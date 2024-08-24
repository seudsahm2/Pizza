from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Pizzeria(models.Model):
    pizzeria_name = models.CharField(max_length=200,blank=True)
    street = models.CharField(max_length=400,blank=True)
    city = models.CharField(max_length=400,blank=True)
    state = models.CharField(max_length=2, null=True,blank=True)
    zip_code = models.IntegerField(blank=True,default=0)
    website = models.URLField(max_length=420, blank=True)
    phone_number = models.CharField(
        validators=[RegexValidator(regex=r'^\d{9,10}$')], max_length=10,blank=True
    )
    description = models.TextField(blank=True)
    logo_image = models.ImageField(upload_to='pizzariaImages',blank=True)
    email = models.EmailField(max_length=254, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return "{}, {}".format(self.pizzeria_name,self.city)