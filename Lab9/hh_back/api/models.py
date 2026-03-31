from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    description = models.TextField()
    city = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'address': self.address,
            'description': self.description,
            'city': self.city
        }
class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')
    salary = models.FloatField()
    description = models.TextField()

    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'company': self.company.name,
            'salary': self.salary,
            'description': self.description
        }

    def __str__(self):  
        return self.name
