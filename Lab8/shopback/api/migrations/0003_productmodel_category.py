

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_category_categorymodel_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='productmodel',
            name='category',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.categorymodel'),
        ),
    ]
