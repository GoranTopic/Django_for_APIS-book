



    except ImportError as exc:
            "forget to activate a virtual environment?"
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
            "available on your PYTHONPATH environment variable? Did you "
    """Run administrative tasks."""
        from django.core.management import execute_from_command_line
def main():
"""Django's command-line utility for administrative tasks."""
#!/usr/bin/env python
import os
        raise ImportError(
    main()
import sys
        ) from exc
if __name__ == '__main__':
            "Couldn't import Django. Are you sure it's installed and "
    execute_from_command_line(sys.argv)
    try:
