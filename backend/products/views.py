from django.db.models import Q
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter

from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ["price", "name", "created_at"]
    ordering = ["id"]

    def get_queryset(self):
        queryset = Product.objects.all()
        search = self.request.query_params.get("search", "").strip()
        category = self.request.query_params.get("category", "").strip()
        max_price = self.request.query_params.get("max_price", "").strip()
        featured = self.request.query_params.get("featured", "").strip().lower()

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search)
                | Q(category__icontains=search)
                | Q(brand__icontains=search)
                | Q(sku__icontains=search)
            )
        if category and category != "All Products":
            queryset = queryset.filter(category=category)
        if max_price:
            try:
                queryset = queryset.filter(price__lte=float(max_price))
            except ValueError:
                pass
        if featured in {"true", "1", "yes"}:
            queryset = queryset.filter(featured=True)

        return queryset
