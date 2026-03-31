from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy

def CompaniesList(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        return JsonResponse([company.to_json() for company in companies], safe=False)

def CompanyDetail(request, id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(pk=id)
            return JsonResponse(company.to_json(), safe=False)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)

def VacanciesList(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)
    
def VacanciesByCompany(request, id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(pk=id)
            vacancies = company.vacancies.all()
            return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
def VacancyDetail(request, id):
    if request.method == 'GET':
        try:
            vacancy = Vacancy.objects.get(pk=id)
            return JsonResponse(vacancy.to_json(), safe=False)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)

def TopTenVacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False)
    