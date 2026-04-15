from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)


# For FBVs:clea

# from api.views.fbv import products_list, product_detail
# urlpatterns = [
#     path('products/', products_list),
#     path('products/<int:product_id>/', product_detail),
# ]
 
urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
 
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]