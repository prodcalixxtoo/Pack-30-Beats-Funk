import os
import re

directory = r'c:\Users\User\Pictures\prodcalixto FUNK'
colors_to_replace = {
    '#fbbf24': '#1389f6',
    '#fcd34d': '#1389f6',
    '#f59e0b': '#1389f6',
    '#facc15': '#1389f6',
    '#b45309': '#1389f6',
    '#ffc107': '#1389f6',
    '251, 191, 36': '19, 137, 246',
    '252, 211, 77': '19, 137, 246',
    '180, 83, 9': '19, 137, 246',
    '255, 193, 7': '19, 137, 246',
}

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.html') or file.endswith('.css') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original = content
                for old, new in colors_to_replace.items():
                    content = re.sub(old, new, content, flags=re.IGNORECASE)
                
                if original != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f'Updated {filepath}')
            except Exception as e:
                print(f'Failed to process {filepath}: {e}')
