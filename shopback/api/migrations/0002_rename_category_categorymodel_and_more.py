

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='category',
            new_name='categoryModel',
        ),
        migrations.RenameModel(
            old_name='product',
            new_name='productModel',
        ),
    ]
