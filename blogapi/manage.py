    main()
"""Django's command-line utility for administrative tasks."""
def main():
import os
if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
        from django.core.management import execute_from_command_line
        raise ImportError(
    try:
    except ImportError as exc:
            "available on your PYTHONPATH environment variable? Did you "
import sys




    execute_from_command_line(sys.argv)
    """Run administrative tasks."""
            "Couldn't import Django. Are you sure it's installed and "
#!/usr/bin/env python
            "forget to activate a virtual environment?"
        ) from exc
