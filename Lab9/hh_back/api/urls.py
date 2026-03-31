from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
   path('companies/', views.CompaniesList),
   path('companies/<int:id>/', views.CompanyDetail),
   path('companies/<int:id>/vacancies', views.VacanciesByCompany),
   path('vacancies/', views.VacanciesList),
   path('vacancies/<int:id>/', views.VacancyDetail),
   path('vacancies/top_ten/', views.TopTenVacancies),


]