from django.db import models

# Create your models here.

class productModel(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey('CategoryModel', on_delete=models.CASCADE, related_name='products',default=None)


    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': str(self.price),
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }
class categoryModel(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }