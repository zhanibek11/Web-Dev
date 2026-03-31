from django.shortcuts import render
from django.http import JsonResponse
from api.models import productModel as ProductModel, categoryModel as CategoryModel

def products(request):
    products_list = ProductModel.objects.all()
    result = [p.to_json() for p in products_list]
    return JsonResponse(result, safe=False)

def product_detail(request, id):
    try:
        product_instance = ProductModel.objects.get(id=id)
        return JsonResponse(product_instance.to_json())
    except ProductModel.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def categories(request):
    categories_list = CategoryModel.objects.all()
    result = [c.to_json() for c in categories_list]
    return JsonResponse(result, safe=False)

def category_detail(request, id):
    try:
        category_instance = CategoryModel.objects.get(id=id)
        return JsonResponse(category_instance.to_json())
    except CategoryModel.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        category_instance = CategoryModel.objects.get(id=id)
        products_list = ProductModel.objects.filter(category=category_instance)
        result = [p.to_json() for p in products_list]
        return JsonResponse(result, safe=False)
    except CategoryModel.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    


