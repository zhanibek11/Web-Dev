#   from .fbv      import products_list, product_detail          #  FBV
#   from .cbv      import ProductListAPIView, ProductDetailAPIView  #  CBV
#   from .mixins   import ProductListAPIView, ProductDetailAPIView  #  Mixins
#   from .generics import ProductListAPIView, ProductDetailAPIView  #  Generics


from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
 