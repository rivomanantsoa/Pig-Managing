# Generated by Django 5.1.2 on 2024-12-03 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('managing', '0003_identite_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='identite',
            name='genre',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
